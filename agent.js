/**
 * TakeTwo — Agent 引擎
 * 
 * 三层架构：
 *   1. AgentStateManager — 会话状态管理
 *   2. PromptBuilder      — 动态拼装 System Prompt（Agent 人设 + 注入 Skill 知识）
 *   3. APICaller          — LLM API 调用 + 响应解析
 * 
 * 设计原则：
 *   - Agent 管理「体验」：语气、节奏、状态流转
 *   - Skill 提供「内容」：方法步骤、评判标准、纠偏话术
 *   - 加新方法 = 更新 skills.js 的 METHOD_SKILLS，Agent 无需改动
 */

// ========== 1. Agent 状态管理器 ==========
const AgentState = {
  // 会话信息
  sessionId: null,
  mode: null,           // 'now' | 'training'
  
  // 此刻模式状态
  nowPhase: null,       // 'input' | 'nvc' | 'complete'
  userScenario: '',
  currentMethod: null,
  currentStep: null,    // 当前步骤名
  stepNumber: 0,
  stepAnswers: [],      // [{ step: '观察', answer: '...' }]
  retriesPerStep: {},   // { '观察': 0 }
  
  // 沙盘模式状态
  currentLevel: null,   // 1-5
  levelResults: [],
  currentVariant: 1,
  selectedScenario: null,
  selectedRelation: null,
  userPattern: null,
  
  // 通用
  conversationHistory: [],  // [{ role: 'user'|'assistant', content: '...' }]
  isComplete: false,
  reviewData: null,
  
  // 初始化
  initSession(mode) {
    this.sessionId = 'tt_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    this.mode = mode;
    this.conversationHistory = [];
    this.isComplete = false;
    this.reviewData = null;
    
    if (mode === 'now') {
      this.nowPhase = 'input';
      this.currentMethod = null;
      this.currentStep = null;
      this.stepNumber = 0;
      this.stepAnswers = [];
      this.retriesPerStep = {};
      this.userScenario = '';
    } else if (mode === 'training') {
      this.currentLevel = null;
      this.levelResults = [];
      this.userPattern = null;
    }
  },
  
  reset() {
    this.sessionId = null;
    this.mode = null;
    this.nowPhase = null;
    this.currentMethod = null;
    this.currentStep = null;
    this.stepNumber = 0;
    this.stepAnswers = [];
    this.retriesPerStep = {};
    this.userScenario = '';
    this.currentLevel = null;
    this.levelResults = [];
    this.userPattern = null;
    this.conversationHistory = [];
    this.isComplete = false;
    this.reviewData = null;
  },
  
  addMessage(role, content) {
    this.conversationHistory.push({ role, content });
    // Keep last 30 messages for context
    if (this.conversationHistory.length > 30) {
      this.conversationHistory = this.conversationHistory.slice(-30);
    }
  },
  
  getUserScenario() {
    return this.userScenario;
  }
};

// ========== 2. Prompt 构建器 ==========
const PromptBuilder = {
  
  /**
   * 构建完整的 System Prompt
   * 核心思路：Agent 骨架不变，按需注入当前 Skill 的知识
   */
  build() {
    const parts = [];
    
    // ----- Agent 骨架（所有场景通用） -----
    parts.push(this._buildAgentCore());
    
    // ----- 注入方法知识 -----
    if (AgentState.mode === 'now' && AgentState.nowPhase === 'input') {
      // 阶段1：注入全量方法摘要，让 LLM 根据场景选择
      parts.push(this._buildMethodLibrary());
    } else if (AgentState.currentMethod) {
      // 阶段2+：注入已选方法的完整 Skill
      parts.push(this._buildMethodInjection(AgentState.currentMethod));
    }
    
    // ----- 模式特定指令 -----
    if (AgentState.mode === 'now') {
      parts.push(this._buildNowModeInstructions());
    } else if (AgentState.mode === 'training') {
      parts.push(this._buildTrainingModeInstructions());
    }
    
    // ----- 输出格式要求 -----
    parts.push(this._buildOutputFormat());
    
    return parts.join('\n\n---\n\n');
  },
  
  /**
   * Agent 核心人格（始终不变）
   */
  _buildAgentCore() {
    return `你是 TakeTwo 的对话教练——一个温暖、专业、不评判的沟通训练引导者。

## 你的身份
- 你像一个懂心理学的朋友，不是冷冰冰的老师或工具
- 你的任务不是给答案，而是提问、倾听、纠偏——帮用户自己找到更好的回应方式
- 你不讲课，不堆砌术语，不让人感觉在上课

## 核心行为规则
1. 一步一步来——每次只引导一个步骤，等用户回答后再进入下一步
2. 纠偏要精准——指出具体哪里偏了、为什么偏了、怎么调。不批评，用"接近了"、"试试换个角度"
3. 肯定要真诚——用"对了"、"很好"、"这就对了"，不夸张
4. 最多纠偏 3 次——同一问题纠偏 3 次后用户还偏，给出示范然后进入下一步
5. 保持温暖——每次输出控制在 200 字以内，简洁有温度

## 语气风格
- 用中文，口语化，像朋友
- 不用"您"，用"你"
- 每次对话结束给出一个隐藏状态标记（见输出格式）`;
  },
  
  /**
   * 注入当前方法的 Skill 知识
   */
  _buildMethodInjection(methodName) {
    const skill = getSkill(methodName);
    if (!skill) return '';
    
    let injection = `## 当前使用的方法：${skill.name}
来源：${skill.source}
核心逻辑：${skill.coreLogic}
简介：${skill.description}

### 方法步骤与评判标准`;

    skill.steps.forEach((step, idx) => {
      injection += `

**第${idx + 1}步：${step.name}**
- 目标：${step.goal}
- ✅ 正确示例："${step.goodExample}"
- ❌ 常见错误："${step.badExample}"
- 常见错误类型：${step.commonMistakes.join('、')}
- 纠偏规则：`;

      step.correctionRules.forEach(cr => {
        injection += `\n  · 当用户回答匹配「${cr.pattern}」→ ${cr.hint}`;
      });
    });

    return injection;
  },
  
  /**
   * 注入全量方法摘要（供 LLM 在时刻阶段1选择）
   * 每个方法只给：名称 + 核心逻辑 + 简介 + 适配场景
   */
  _buildMethodLibrary() {
    let lib = `## 可用沟通方法库

请根据用户描述的场景，从以下方法中选择最合适的一个：

`;
    const allNames = getMethodNames();
    allNames.forEach((name, i) => {
      const sk = getSkill(name);
      if (!sk) return;
      lib += `${i + 1}. **${sk.name}** | ${sk.coreLogic}
   简介：${sk.description}
   适配场景：${sk.sceneMatches.join('、')}

`;
    });

    lib += `### 选择原则
- 优先匹配场景类型（场景中有明确权力不对等 → 非暴力沟通；有情绪对抗 → 戈特曼情绪急救；被阴阳怪气 → 降维回应法；被甩锅 → 事实锚定法 或 关键对话；需要拒绝 → 果断表达法；被过度干涉 → 课题分离；收到好意 → 接受力训练）
- 考虑用户情绪强度（激烈 → 先情绪急救再对话；冷静 → 直接方法引导）
- 如果不确定，默认选择「非暴力沟通」

你必须在第一条回复的 STATE 标记中携带你选择的方法名称（method:XXX）。`;

    return lib;
  },

  /**
   * 此刻模式指令
   */
  _buildNowModeInstructions() {
    const instructions = `## 模式：此刻模式（急救引导）

当前阶段：${AgentState.nowPhase}

### 流程

**阶段1：接收场景（nowPhase = 'input'）**
用户会描述发生了什么。你需要：
- 用一句话确认你理解了场景（复述关键信息）
- 从「可用沟通方法库」中判断最适合用哪个方法（仔细看每个方法的 sceneMatches）
- 简介该方法的核心逻辑和为什么选它（1-2句话）
- 然后进入引导
- ⚠️ 必须在 STATE 标记中带 method:XXX，例如：<!--STATE:now|nvc|1|观察|method:课题分离-->

**阶段2：方法步骤引导（nowPhase = 'nvc'）**
按所选方法的步骤顺序，每次只引导一步：
1. 先说明这一步要做什么
2. 给正反例提示
3. 提问 → 等用户回答 → 评判 → 纠偏或过关

**当前进度：** ${AgentState.currentStep ? `正在第 ${AgentState.stepNumber} 步「${AgentState.currentStep}」` : '尚未开始'}
${AgentState.stepAnswers.length > 0 ? '已完成步骤：' + AgentState.stepAnswers.map(a => a.step).join(' → ') : ''}

### 每次引导提问的格式
1. 用 📋 + 步数 + 步骤名开头
2. 说明这一步要做什么 
3. 给 ❌ 错误示例 和 ✅ 正确示例
4. 提问`;

    return instructions;
  },
  
  /**
   * 沙盘模式指令
   */
  _buildTrainingModeInstructions() {
    const levelInfo = AgentState.currentLevel 
      ? `\n当前关卡：第 ${AgentState.currentLevel} 关`
      : '\n尚未开始任何关卡';
    
    const variantInfo = AgentState.currentVariant > 1
      ? `\n当前变体：第 ${AgentState.currentVariant} 变体（精简 3 关：看见自己 → 换方式 → 稳住）`
      : '\n当前变体：第 1 变体（完整 5 关：听懂 → 看见自己 → 换方式 → 稳住 → 迁移）';
    
    const scenarioInfo = AgentState.selectedScenario 
      ? `\n训练场景：${AgentState.selectedScenario}`
      : '';
    
    return `## 模式：沙盘模式（渐进训练）${scenarioInfo}${variantInfo}${levelInfo}

### 流程规则
1. 变体 1 走完整 5 关，变体 2-5 走精简 3 关（第 2 关 → 第 3 关 → 第 4 关）
2. 每关有明确训练目标，不是泛泛练习
3. 每关通过后才进下一关
4. 第 2 关需要判定用户的反应模式（回避型/防御型/讨好型/被动攻击型/建设型）

### 五关详情

**第 1 关「听懂」**
- 给出对方说的话，列 3-5 个含义选项让用户多选
- 包含：字面意思、隐藏含义、过度解读（干扰项）
- 评判：选中关键含义 → 通过；漏掉 → 提示；选了过度解读 → 纠偏

**第 2 关「看见自己」** ⚠️ 关键规则
- 向用户提问："同样的场景，你的第一反应是什么？脱口而出的那种——不修饰。"
- ⚠️ 重要：用户在此步的回复就是 ta 的第一反应，不管内容像不像"对话"。你的身份是分析师，不是场景角色——绝对不要扮演对方继续对话！
- 只要用户回复了，立即分析其反应模式并给出反馈。不要追问、不要确认、不要"好的我听着"之类的对话回应。
- 判定反应模式：
  · 回避型：沉默、退缩、我没意见
  · 防御型：解释、反击、自证
  · 讨好型：过度道歉、委曲求全
  · 被动攻击型：表面顺从实则不满
  · 建设型：既表达又维护关系
- 反馈格式：给出判定结果（模式名称 + 为什么是这个模式）+ 这个模式在真实沟通中的代价 + 鼓励语（"看见就是改变的开始"）
- 反馈后立即输出状态标记并进入第 3 关

**第 3 关「换一种方式」**
- 引导用户用建设性方法回应
- 评判标准同此刻模式的步骤评判

**第 4 关「稳住」**
- 对方继续施压，看用户能否保持建设性
- 退缩了 → "你回到旧模式了"
- 攻击了 → "反击让关系更僵"

**第 5 关「迁移」**
- 换人换场景，类似困境
- 评判迁移能力

### 训练场景内容
你需要在第 1 关时根据用户选择的场景类型生成：
- original_words：对方说的话（核心训练素材）
- key_meanings：3-5 个含义选项
- follow_up_pressure：第 4 关的施压话术
- transfer_scene：第 5 关的迁移场景`;
  },
  
  /**
   * 输出格式要求
   */
  _buildOutputFormat() {
    return `## 输出格式

每条回复末尾必须包含一个隐藏的状态标记：

<!--STATE:mode|phase|step|data-->

标记格式说明：
- 此刻模式：<!--STATE:now|input|0|--> （等待场景输入）
- 此刻模式：<!--STATE:now|nvc|1|观察|method:非暴力沟通--> （正在进行第1步观察，选定了方法）
- 此刻模式：<!--STATE:now|complete|4|--> （四步完成）
- 沙盘模式：<!--STATE:training|level|1|听懂--> （第1关）
- 沙盘模式：<!--STATE:training|level|2|看见自己--> （第2关，需包含 reaction_mode:xxx）
- 沙盘模式：<!--STATE:training|complete|5|--> （5关完成）

第2关需要附加反应模式：<!--STATE:training|level|2|看见自己|reaction_mode:防御型-->

请严格遵守这个格式。前端依赖这些标记来更新 UI 状态。`;
  }

};

// ========== 3. API 调用 + 响应解析 ==========
const AgentRunner = {
  
  /**
   * 发送消息给 LLM，返回清洗后的回复文本
   */
  async send(message) {
    // 1. 构建消息列表
    const systemPrompt = PromptBuilder.build();
    const messages = [
      { role: 'system', content: systemPrompt },
      ...AgentState.conversationHistory.slice(-20),
      { role: 'user', content: message }
    ];
    
    // 2. 调用 API
    const rawResponse = await this._callAPI(messages);
    
    // 3. 解析状态标记
    const { cleanText, stateUpdate } = this._parseResponse(rawResponse);
    
    // 4. 更新状态
    if (stateUpdate) {
      this._applyState(stateUpdate);
    }
    
    // 5. 存入历史
    AgentState.addMessage('user', message);
    AgentState.addMessage('assistant', cleanText);
    
    return {
      text: cleanText,
      stateUpdate: stateUpdate
    };
  },
  
  /**
   * 调用 LLM API
   */
  async _callAPI(messages) {
    if (!settings.apiKey) {
      return '⚠️ 请先在「设置」中配置 API Key，然后重试。';
    }
    
    const baseUrl = settings.baseUrl || 'https://api.deepseek.com';
    const url = `${baseUrl.replace(/\/$/, '')}/v1/chat/completions`;
    
    try {
      // 通过 WKWebView bridge 调用（绕过 CORS）
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.apiProxy) {
        return await this._callViaBridge(url, messages);
      }
      
      // 直接调用（如果 CORS 允许）
      // 使用 Worker 代理时不需要传 Authorization（Key 在 Worker 端）
      const headers = { 'Content-Type': 'application/json' };
      if (!baseUrl.includes('workers.dev')) {
        headers['Authorization'] = `Bearer ${settings.apiKey}`;
      }
      
      const resp = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model: settings.model || 'deepseek-v4-flash',
          messages,
          temperature: 0.7,
          max_tokens: 800
        })
      });
      
      if (!resp.ok) {
        const errData = await resp.json().catch(() => ({}));
        throw new Error(errData.error?.message || `API 错误 ${resp.status}`);
      }
      
      const data = await resp.json();
      return data.choices[0].message.content;
      
    } catch (e) {
      // CORS 错误 → 提示用户用本地代理或设置
      if (e.message.includes('Failed to fetch') || e.message.includes('NetworkError')) {
        throw new Error('CORS_ERROR');
      }
      throw e;
    }
  },
  
  /**
   * 通过 WKWebView JS Bridge 调用（iOS 原生壳专用）
   */
  async _callViaBridge(url, messages) {
    return new Promise((resolve, reject) => {
      const callbackId = 'cb_' + Date.now();
      window[callbackId] = function(response) {
        delete window[callbackId];
        if (response.error) reject(new Error(response.error));
        else resolve(response.text);
      };
      
      window.webkit.messageHandlers.apiProxy.postMessage({
        callbackId,
        url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${settings.apiKey}`
        },
        body: JSON.stringify({
          model: settings.model || 'deepseek-v4-flash',
          messages,
          temperature: 0.7,
          max_tokens: 800
        })
      });
    });
  },
  
  /**
   * 解析 LLM 回复，提取 STATE 标记
   */
  _parseResponse(raw) {
    const stateRegex = /<!--STATE:(.*?)-->/;
    const match = raw.match(stateRegex);
    
    let stateUpdate = null;
    if (match) {
      const parts = match[1].split('|');
      stateUpdate = {
        mode: parts[0],
        phase: parts[1],
        detail: parts[2] || null,
        extra: parts[3] || null
      };
      
      // 解析所有键值对（method:XXX, reaction_mode:XXX 等）
      const fullTag = match[1];
      const methodMatch = fullTag.match(/method:([^|]+)/);
      if (methodMatch) stateUpdate.method = methodMatch[1];
      const rmMatch = fullTag.match(/reaction_mode:([^|]+)/);
      if (rmMatch) stateUpdate.reactionMode = rmMatch[1];
    }
    
    const cleanText = raw.replace(/<!--STATE:.*?-->/g, '').trim();
    
    return { cleanText, stateUpdate };
  },
  
  /**
   * 应用状态更新
   */
  _applyState(update) {
    // 如果 LLM 选定了方法，立即设置
    if (update.method) {
      AgentState.currentMethod = update.method;
    }

    if (update.mode === 'now') {
      AgentState.nowPhase = update.phase;
      if (update.phase === 'nvc') {
        AgentState.stepNumber = parseInt(update.detail) || 1;
        AgentState.currentStep = update.extra || AgentState.nvcSteps?.[AgentState.stepNumber - 1]?.name || '';
      } else if (update.phase === 'complete') {
        AgentState.isComplete = true;
        AgentState.nowPhase = 'complete';
      }
    } else if (update.mode === 'training') {
      if (update.phase === 'level') {
        AgentState.currentLevel = parseInt(update.detail) || 1;
        // 自动记录已通过的关卡
        for (var l = 1; l <= AgentState.currentLevel; l++) {
          if (!AgentState.levelResults.some(function(r){return r.step === l})) {
            AgentState.levelResults.push({step: l, name: '第' + l + '关', passed: true});
          }
        }
        if (update.reactionMode) {
          AgentState.userPattern = update.reactionMode;
        }
      } else if (update.phase === 'complete') {
        AgentState.isComplete = true;
        AgentState.currentLevel = AgentState.currentLevel || 5;
        // 补齐所有关卡
        for (var l = 1; l <= 5; l++) {
          if (!AgentState.levelResults.some(function(r){return r.step === l})) {
            AgentState.levelResults.push({step: l, name: '第' + l + '关', passed: true});
          }
        }
      }
    }
  },
  
  /**
   * 调用复盘 Agent — 生成完整复盘报告
   */
  async callReview() {
    // 构建复盘用的上下文
    const lr = AgentState.levelResults || [];
    const lrSummary = lr.length > 0 
      ? `通关步骤：${lr.map(function(r){return r.name}).join('→')}（共${lr.length}步）`
      : `已通过 ${AgentState.currentLevel || '多'} 步训练`;
    
    // 提取对话历史（用户发言 + 教练关键回应）
    const chat = AgentState.conversationHistory || [];
    const chatSummary = chat.length > 0
      ? chat.map(function(m){
          var prefix = m.role === 'user' ? '👤 用户' : '🤖 教练';
          return prefix + '：' + (m.content || '').substring(0, 500);
        }).join('\n')
      : '（无对话记录）';
    
    const reviewPrompt = `请基于以下沟通训练对话，生成复盘报告。

训练模式：${AgentState.mode === 'now' ? '此刻（急救模式）' : '沙盘（训练模式）'}
使用方法：${AgentState.currentMethod || '非暴力沟通'}
${AgentState.mode === 'now' 
  ? `用户场景：${AgentState.userScenario || '未提供'}` 
  : `训练场景：${AgentState.selectedScenario || '未提供'}\n${lrSummary}\n反应模式：${AgentState.userPattern || '未判定'}`}

=== 对话记录 ===
${chatSummary}
=== 对话记录结束 ===

请分析用户在对话中的表现，以 JSON 格式输出复盘报告：
{
  "grade": "S/A/B+/B/C",
  "gradeLabel": "简短标签（如「方法运用娴熟」「正在掌握节奏」「还有提升空间」等，5-8字）",
  "strengths": ["用户表现好的地方，至少2条"],
  "weaknesses": [{"area": "弱项领域", "detail": "具体表现描述", "suggestion": "改进建议"}],
  "reactionPattern": "用户沟通反应模式分析（如「先防御后冷静」「习惯先解释」「能快速觉察情绪」等，30字内）",
  "nextRecommendation": "下一步训练建议（针对该心理学方法的薄弱环节，给出具体可操作的建议）"
}

注意：
- 如果对话记录为空，grade 标为 C，其他字段也要如实说明
- gradeLabel 根据整体表现给，S=卓越 A=优秀 B+=良好 B=一般 C=需加强
- 优缺点必须基于对话内容，不要编造
- 只输出 JSON，不要任何其他文字。`;

    const messages = [
      { role: 'system', content: '你是 TakeTwo 复盘分析师。基于对话内容分析用户的沟通模式，输出严格 JSON。' },
      { role: 'user', content: reviewPrompt }
    ];
    
    try {
      const rawResponse = await this._callAPI(messages);
      const jsonStart = rawResponse.indexOf('{');
      const jsonEnd = rawResponse.lastIndexOf('}') + 1;
      const jsonStr = rawResponse.slice(jsonStart, jsonEnd);
      return JSON.parse(jsonStr);
    } catch (e) {
      return null; // API error — caller should show appropriate message
    }
  }
};
