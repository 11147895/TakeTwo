/**
 * TakeTwo — Skill 组装器
 * 作用：把 skills/<方法>.js 注册到 window.SKILL_DEFS 的定义，按 SKILL_MANIFEST 组装成 METHOD_SKILLS，
 *       并暴露查询接口（getSkill 等），保持与原 skills.js 完全一致的对外行为。
 * 对外接口不变：getSkill / getSkillsForSceneType / getDefaultMethod / getMethodNames
 */
(function () {
  // ========== 组装方法库 ==========
  const METHOD_SKILLS = {};
  (window.SKILL_MANIFEST || []).forEach(function (m) {
    const def = window.SKILL_DEFS && window.SKILL_DEFS[m.name];
    if (def) {
      METHOD_SKILLS[m.name] = def;
    } else {
      console.warn('[Skill] 未找到方法定义: ' + m.name + ' (' + m.file + ')');
    }
  });

  // 组装结果挂到全局（与原 skills.js 一致）
  window.METHOD_SKILLS = METHOD_SKILLS;

  // 历史兼容别名（legacy 中"情绪焦点疗法"的 key 是"情绪焦点疗法EFT"，老快照可能存旧名）
  const METHOD_ALIASES = { "情绪焦点疗法EFT": "情绪焦点疗法" };

  // ========== Skill 查询工具（对外接口不变） ==========
  function getSkill(methodName) {
    const resolved = METHOD_ALIASES[methodName] || methodName;
    return METHOD_SKILLS[resolved] || METHOD_SKILLS["非暴力沟通"];
  }

  function getSkillsForSceneType(sceneType) {
    const names = SCENE_ANALYZER_SKILL.sceneToMethods[sceneType] || [];
    return names.map(function (n) { return { name: n, skill: getSkill(n) }; });
  }

  function getDefaultMethod() {
    return getSkill("非暴力沟通");
  }

  function getMethodNames() {
    return Object.keys(METHOD_SKILLS);
  }

  // 暴露为全局函数（agent.js 依赖全局 typeof 检查）
  window.getSkill = getSkill;
  window.getSkillsForSceneType = getSkillsForSceneType;
  window.getDefaultMethod = getDefaultMethod;
  window.getMethodNames = getMethodNames;

  // ========== 场景分析 Skill ==========
  const SCENE_ANALYZER_SKILL = {
    id: "scene-analyzer",
    name: "场景分析",
    description: "理解用户描述的场景，提取结构化信息，匹配推荐方法",
    sceneTypes: [
      "被当众质疑/批评",
      "被安排模糊任务",
      "被甩锅/抢功劳",
      "被夸/被表扬",
      "收到好意/机会",
      "需要拒绝但说不出口",
      "被阴阳怪气/暗讽",
      "被道德绑架/过度干涉",
      "伴侣吵架/冷战",
      "被表白/示好",
      "说了伤人的话想补救",
      "被借钱不好意思拒绝",
      "被催婚",
      "下属提离职要挟",
      "跨部门推诿"
    ],
    relationshipTypes: ["职场", "亲密关系", "朋友", "家人", "新认识的人"],
    powerDynamics: ["对方上位", "平等", "你上位"],
    sceneToMethods: {
      "被当众质疑/批评": ["非暴力沟通", "事实锚定法", "ABC认知模型"],
      "被安排模糊任务": ["非暴力沟通", "D.E.S.C.模型", "关键对话"],
      "被甩锅/抢功劳": ["事实锚定法", "关键对话", "FBI谈判术"],
      "被夸/被表扬": ["接受力训练", "冒名顶替综合征应对"],
      "收到好意/机会": ["接受力训练"],
      "需要拒绝但说不出口": ["果断表达法", "课题分离", "关键对话"],
      "被阴阳怪气/暗讽": ["降维回应法", "灰岩法", "情绪急救法"],
      "被道德绑架/过度干涉": ["课题分离", "D.E.S.C.模型", "降维回应法"],
      "伴侣吵架/冷战": ["戈特曼情绪急救", "非暴力沟通", "依恋理论"],
      "被表白/示好": ["接受力训练", "果断表达法"],
      "说了伤人的话想补救": ["三层修复法", "情感账户", "高难度对话"],
      "被借钱不好意思拒绝": ["果断表达法", "课题分离"],
      "被催婚": ["课题分离", "降维回应法"],
      "下属提离职要挟": ["FBI谈判术", "关键对话"],
      "跨部门推诿": ["关键对话", "事实锚定法", "CRIB法则"]
    },
    defaultMethod: "非暴力沟通"
  };
  window.SCENE_ANALYZER_SKILL = SCENE_ANALYZER_SKILL;

  // ========== 复盘分析 Skill ==========
  const REVIEW_SKILL = {
    id: "review",
    name: "复盘分析",
    description: "总结用户表现，标记反应模式，生成建议",
    reactionModes: {
      "回避型": { emoji: "🏃", description: "不回应、退缩、转移话题、快速退让", cost: "对方会以为你好拿捏，下次可能更过分" },
      "防御型": { emoji: "🛡️", description: "解释、反击、自证、推卸责任", cost: "对方会觉得你没有底气，下次还会这样对你" },
      "讨好型": { emoji: "🙇", description: "过度道歉、委曲求全、否定自己的需要", cost: "短时间内不会冲突，但长此以往你会越来越累，对方也不会更尊重你" },
      "被动攻击型": { emoji: "🎭", description: "表面顺从实则不满、阴阳怪气回击", cost: "这种情绪攒多了，爆发的时候伤害更大" },
      "建设型": { emoji: "🎯", description: "既表达自己又维护关系、有感受有需要有请求", cost: null }
    },
    weaknessDimensions: [
      "区分能力（事实vs评判、感受vs想法、需要vs策略、请求vs命令）",
      "表达深度（能否触及深层感受和需要）",
      "稳定性（在引导下能做好，但压力下回到旧模式）",
      "迁移性（能否用自己的话表达而非套模板）"
    ]
  };
  window.REVIEW_SKILL = REVIEW_SKILL;

  // ========== 场景生成 Skill ==========
  const SCENE_GENERATOR_SKILL = {
    id: "scene-generator",
    name: "场景生成",
    description: "生成训练场景和场景变体",
    variantStyles: [
      { number: 1, style: "直接", description: "公开场合直接质疑" },
      { number: 2, style: "反问", description: "用反问句暗指你做得不够" },
      { number: 3, style: "讽刺", description: "带讽刺意味的评价" },
      { number: 4, style: "借人之口", description: "不直接说你，说'有同事反映'" },
      { number: 5, style: "质疑能力", description: "不质疑事，质疑你这个人" }
    ]
  };
  window.SCENE_GENERATOR_SKILL = SCENE_GENERATOR_SKILL;

  // ========== 调试信息 ==========
  console.log('[Skill] 已加载 ' + Object.keys(METHOD_SKILLS).length + ' 个方法');
})();
