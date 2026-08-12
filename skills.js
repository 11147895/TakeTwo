/**
 * TakeTwo — Skill 定义库
 * 每个 Skill 是一种心理学方法的完整知识结构
 * 包含：步骤定义、评判标准、纠偏话术、场景匹配规则
 * 
 * 设计原则：
 *   - Agent 负责「怎么说」（语气、节奏、状态管理）
 *   - Skill 负责「说什么」（步骤、评判、纠偏）
 */

const METHOD_SKILLS = {

  // ==================== 自我觉察类 ====================

  "非暴力沟通": {
    id: "nvc",
    category: "自我觉察",
    name: "非暴力沟通",
    englishName: "Nonviolent Communication (NVC)",
    source: "马歇尔·卢森堡《非暴力沟通》",
    coreLogic: "观察 → 感受 → 需要 → 请求",
    description: "在权力不对等、情绪被激发的场景中，清晰表达自己而不攻击对方",
    sceneMatches: ["被当众质疑/批评", "被甩锅/抢功劳", "伴侣吵架/冷战", "被安排模糊任务"],
    steps: [
      {
        name: "观察",
        goal: "只说你看到、听到的事实，不加评判",
        goodExample: "领导在会议上问我有没有看过方案",
        badExample: "领导当众羞辱我",
        commonMistakes: ["把评判当观察", "把对动机的猜测当事实"],
        correctionRules: [
          { pattern: "羞辱|故意|针对|看不起|不尊重|欺负|刁难|找茬", hint: "试试只复述他说了什么、做了什么——不评价他的动机" },
          { pattern: "^.{0,5}$", hint: "再具体一点——你看到了什么？听到了什么？他说了什么原话？" }
        ]
      },
      {
        name: "感受",
        goal: "表达情绪感受，不是想法或对别人的判断",
        goodExample: "我感到很难堪，还有点生气",
        badExample: "我觉得他不尊重我",
        commonMistakes: ["把想法当感受（'我觉得他...'）", "说攻击性的话伪装成感受"],
        correctionRules: [
          { pattern: "觉得.*不|认为.*不", hint: "'我觉得他不尊重我'是想法。感受是情绪词——难堪、委屈、生气、紧张、受伤……你心里是什么感觉？" },
          { pattern: "^(?!.*(难堪|委屈|生气|愤怒|尴尬|紧张|害怕|沮丧|失望|焦虑|无助|受伤|难过|憋屈|羞耻|烦躁|压抑|震惊|困惑|孤独|内疚|后悔))", hint: "感受是情绪词。你当时心里冒出来的是什么情绪？" }
        ]
      },
      {
        name: "需要",
        goal: "识别你的什么需要没有被满足",
        goodExample: "我需要被尊重，也希望我的努力能被看见",
        badExample: "我想辞职",
        commonMistakes: ["把策略当需要（'我想辞职'是策略）", "不够具体（'我需要尊重'太宽）"],
        correctionRules: [
          { pattern: "我想|我要|我准备|打算", hint: "这是你的策略，不是需要。需要是更深层的东西——尊重？认可？安全感？自主？" },
          { pattern: "^(?!.*(尊重|认可|被理解|安全感|自主|看见|公平|归属|价值|连接|信任|支持|肯定))", hint: "常见的需要：被尊重、被认可、被理解、安全感、自主、公平……你的核心需要是什么？" }
        ]
      },
      {
        name: "请求",
        goal: "提出具体、可执行、不攻击人的请求",
        goodExample: "希望以后有意见能单独跟我说，不在会上当面说",
        badExample: "希望他别这样说话",
        commonMistakes: ["请求太模糊", "用命令的口气", "没有给对方说'不'的空间"],
        correctionRules: [
          { pattern: "^.{0,8}$|别|不要|不准|必须|应该", hint: "请求要具体、可操作。对方能做什么、怎么做？给一个他自己能做到的动作。" },
          { pattern: "但|可是|然而", hint: "请求是邀请，不是命令。试试用'我希望...'或'能不能...'开头，给对方说'不'的空间" }
        ]
      }
    ]
  },

  "萨提亚沟通姿态": {
    id: "satir",
    category: "自我觉察",
    name: "萨提亚沟通姿态",
    source: "维吉尼亚·萨提亚《新家庭如何塑造人》",
    coreLogic: "识别五种沟通姿态 → 回归一致性沟通",
    description: "看到自己在压力下的沟通模式（讨好/指责/超理智/打岔/一致性），并练习回归一致性",
    sceneMatches: ["伴侣吵架/冷战", "被道德绑架/过度干涉", "说了伤人的话想补救"],
    steps: [
      { name: "觉察姿态", goal: "识别当下你在用什么姿态回应", goodExample: "我意识到自己在指责他", badExample: "是他先开始的", commonMistakes: ["无法觉察自己的姿态", "怪对方", "把注意力全放在对方身上"], correctionRules: [{ pattern: "他|你|对方", hint: "先不看对方。停下来，看看自己——你的身体感受？你在讨好、在指责、还是在回避？" }] },
      { name: "看见冰山", goal: "看到这个姿态下面的感受和渴望", goodExample: "我指责是因为我感到害怕——怕不被爱", badExample: "我就这样，改不了", commonMistakes: ["停在表层", "拒绝深入"], correctionRules: [{ pattern: "^.{0,10}$", hint: "指责下面藏着什么？可能是受伤、害怕、孤独——往下挖一层" }] },
      { name: "一致性表达", goal: "同时说感受和需求，不攻击不讨好", goodExample: "我很害怕你不在乎我了，但我又怕说出来", badExample: "你永远都是这样", commonMistakes: ["又回到旧姿态"], correctionRules: [{ pattern: "你总是|你永远|你就是", hint: "回来了——你又在指责了。试试从'我'开始：我感到……我需要……" }] }
    ]
  },

  "情绪焦点疗法EFT": {
    id: "eft",
    category: "自我觉察",
    name: "情绪焦点疗法",
    source: "苏珊·约翰逊《依恋与亲密关系》",
    coreLogic: "识别表面情绪 → 触及深层情绪 → 表达脆弱",
    description: "在亲密关系中，从愤怒/回避背后找到真正的情感需求",
    sceneMatches: ["伴侣吵架/冷战", "被说'你根本不在乎我'", "说了伤人的话想补救"],
    steps: [
      { name: "识别表面情绪", goal: "说出你正在表达的表层情绪", goodExample: "我在发火，一直在指责他", badExample: "没什么，我没事", commonMistakes: ["否认情绪", "只看到对方的问题"], correctionRules: [{ pattern: "^.{0,5}$|没什么|没事|算了", hint: "你心里一定有什么在涌动——即使不太想承认。先看看那一层" }] },
      { name: "触及深层情绪", goal: "找到表面情绪下面藏着什么", goodExample: "我发火是因为害怕失去他", badExample: "我就是生气", commonMistakes: ["停在表层", "不知如何区分"], correctionRules: [{ pattern: "^.{0,8}$|生气|愤怒|烦躁", hint: "愤怒是保护层。它下面通常藏着更脆弱的东西——害怕？受伤？孤独？你试试往深走一步" }] },
      { name: "脆弱性表达", goal: "用不攻击的方式说出你的脆弱", goodExample: "我很害怕你不在乎我了——这种害怕让我生气", badExample: "你必须理解我", commonMistakes: ["又回到指责或回避", "太抽象"], correctionRules: [{ pattern: "你|必须|应该", hint: "脆弱需要从自己出发。试试'我感到……因为……'——重点是你，不是他" }] }
    ]
  },

  "ABC认知模型": {
    id: "abc",
    category: "自我觉察",
    name: "ABC认知模型",
    source: "阿尔伯特·艾利斯《理性情绪行为疗法》",
    coreLogic: "事件(A) → 信念(B) → 情绪(C)；改变B就能改变C",
    description: "当情绪反应过激时，停下来检查中间的自动化信念",
    sceneMatches: ["被当众质疑/批评", "被阴阳怪气/暗讽", "被夸/被表扬"],
    steps: [
      { name: "识别事件A", goal: "客观描述发生了什么", goodExample: "领导在会上问了我方案的事", badExample: "领导当众让我难堪", commonMistakes: ["混入评判", "描述太模糊"], correctionRules: [{ pattern: "让|使|害|害得", hint: "只说你看到听到了什么——像摄像头回放一样" }] },
      { name: "找出信念B", goal: "找到那个自动跳出来的想法", goodExample: "我当时的想法是'他肯定觉得我能力不行'", badExample: "我没想什么", commonMistakes: ["觉得没有信念", "信念太模糊"], correctionRules: [{ pattern: "^.{0,5}$|没想|不知道", hint: "一定有某个念头闪过的——'他觉得我不行'？'我肯定要丢脸了'？试试把那个闪念抓住" }] },
      { name: "检视信念", goal: "用理性评估这个信念是否合理", goodExample: "他问一句就说明我能力不行吗？不一定", badExample: "这就是事实", commonMistakes: ["拒绝检视", "用扭曲的方式'合理化'"], correctionRules: [{ pattern: "^.{0,10}$|就是|当然|肯定", hint: "试试用'不一定'开头——'他不一定觉得我不行'……还有什么其他可能性？" }] }
    ]
  },

  // ==================== 冲突处理类 ====================

  "关键对话": {
    id: "crucial",
    category: "冲突处理",
    name: "关键对话",
    source: "科里·帕特森《关键对话》",
    coreLogic: "从心开始 → 创造安全 → 陈述事实 → 了解对方动机",
    description: "高风险、情绪化、观点分歧的对话中保持建设性",
    sceneMatches: ["被甩锅/抢功劳", "跨部门推诿", "需要拒绝但说不出口"],
    steps: [
      { name: "从心开始", goal: "明确你真正想要的是什么（不是想赢，不是想证明自己）", goodExample: "我想要的是一个能合作的关系，不是我赢他输", badExample: "我想让他知道他错了", commonMistakes: ["想赢/想报复", "目标模糊"], correctionRules: [{ pattern: "让.*知道|赢|证明|让他", hint: "停一下——你真正想要的是什么？让他认错是手段，不是目的。你最终想要什么样的结果？" }] },
      { name: "创造安全", goal: "让对方知道你不是在攻击，让对话安全", goodExample: "我不是要否定你，我是想把这个事做好", badExample: "你听我说", commonMistakes: ["忘了铺垫安全感", "上来就说问题"], correctionRules: [{ pattern: "你|你这|你的", hint: "先不要直奔问题。先给一句安全感的话——'我不是来吵架的'或'我其实很尊重你的判断'" }] },
      { name: "陈述事实", goal: "从你的视角客观陈述，不评判对方", goodExample: "我注意到方案改了三次，我不太知道每次改的原因", badExample: "你每次改都不跟我说理由", commonMistakes: ["用指责的语气说事实", "跳过事实直接说结论"], correctionRules: [{ pattern: "你每次|你总是|你就是", hint: "试试'我注意到……'而不是'你总是……'——前者是事实，后者是攻击" }] },
      { name: "了解动机", goal: "真诚地询问对方的想法，不预判", goodExample: "你当时的考虑是什么？我想听听你的角度", badExample: "为什么改？（质问语气）", commonMistakes: ["假装问实际上在审判", "没有给真空间让对方说"], correctionRules: [{ pattern: "\\?$", hint: "问题本身没问题——语气是关键。你真的想听对方的回答，还是想说'你怎么搞的'？" }] }
    ]
  },

  "高难度对话": {
    id: "difficult",
    category: "冲突处理",
    name: "高难度对话",
    source: "道格拉斯·斯通《高难度对话》",
    coreLogic: "三层对话：事实层 → 感受层 → 身份层",
    description: "将棘手的对话拆解为三层，逐层处理不混淆",
    sceneMatches: ["需要拒绝但说不出口", "说了伤人的话想补救", "跨部门推诿"],
    steps: [
      { name: "事实层", goal: "搞清楚到底发生了什么——各方的版本", goodExample: "我看到的和老板看到的不一样", badExample: "他就是在撒谎", commonMistakes: ["把对方的版本当谎言", "只认自己的版本"], correctionRules: [{ pattern: "撒谎|胡说|骗|假的", hint: "你可以不同意，但对方可能有不同的视角。试试说'我看到的和你的不一样'而不是'你在撒谎'" }] },
      { name: "感受层", goal: "承认双方的感受都是真实的", goodExample: "我理解你很生气，因为你觉得没被尊重", badExample: "你别生气了，不是什么大事", commonMistakes: ["否定对方感受", "只关注自己的感受"], correctionRules: [{ pattern: "别|不要|不值得|没必要", hint: "不要说'不值得生气'——对方生气了那是真的。先承认'你生气了'，再往下走" }] },
      { name: "身份层", goal: "看到这件事对彼此身份认同的冲击", goodExample: "你觉得被质疑了能力——这刺痛了你", badExample: "我不是那个意思，你想多了", commonMistakes: ["回避这层", "说'你想多了'"], correctionRules: [{ pattern: "想多了|小题大做|敏感", hint: "'你想多了'是最伤人的四句话之一。试试说'我可能说的话让你觉得……'——先接住" }] }
    ]
  },

  "CRIB法则": {
    id: "crib",
    category: "冲突处理",
    name: "CRIB法则",
    source: "《关键对话》延伸",
    coreLogic: "Commit → Recognize → Invent → Brainstorm（达成共识的四步）",
    description: "在双方观点冲突时寻找共同目标，建立合作关系",
    sceneMatches: ["跨部门推诿", "被安排模糊任务", "需要说服对方"],
    steps: [
      { name: "承诺共同目标", goal: "先找到双方都想要的东西", goodExample: "我们都希望这个项目能按期上线，对吧？", badExample: "你说的那些行不通", commonMistakes: ["忘了先建立共同目标", "跳过直接进入争论"], correctionRules: [{ pattern: "^.{0,15}$", hint: "先不说方案——你和他有什么共同的目标？找到那个共同的东西，从那里开始" }] },
      { name: "承认分歧", goal: "不回避，直接说'我们在这里不一样'", goodExample: "你对进度的判断和我不同", badExample: "你说的有问题", commonMistakes: ["把分歧当对方的错误", "绕开分歧"], correctionRules: [{ pattern: "错|不对|有问题", hint: "分歧不是谁错了——是视角不同。试试说'我看到的不太一样'而不是'你错了'" }] },
      { name: "提出新方案", goal: "基于共同目标创造性地提出第三种方案", goodExample: "要不我们先做A部分？这样你的优先和我的优先都照顾到了", badExample: "那就按我说的来", commonMistakes: ["只抛方案不给理由", "不是真正的'共同'"], correctionRules: [{ pattern: "我觉得|我认为|我的想法", hint: "方案可以是你提出的，但要提到它怎么同时满足双方的需求" }] }
    ]
  },

  "降维回应法": {
    id: "descend",
    category: "冲突处理",
    name: "降维回应法",
    source: "沟通训练实战总结",
    coreLogic: "不解释 → 不自证 → 不反击 → 给软钉子",
    description: "面对阴阳怪气、暗讽、道德绑架时不进入对方的战场",
    sceneMatches: ["被阴阳怪气/暗讽", "被道德绑架/过度干涉", "被催婚"],
    steps: [
      { name: "识别陷阱", goal: "先意识到对方在把你往哪个方向带", goodExample: "他这句话是想让我开始解释——让我先解释，我一解释就弱了", badExample: "他怎么这样", commonMistakes: ["直接中招，开始解释或反击", "没意识到对方在设场"], correctionRules: [{ pattern: "^(?!.*(想让我|钓鱼|设套|诱导|激))", hint: "暂停——看看对方是不是在把你往某个方向推：让你解释？让你发火？让你服软？先识别他想要你做什么反应" }] },
      { name: "不进场", goal: "用一句话轻轻带过，不进入对方的逻辑", goodExample: "你这么说挺有意思的", badExample: "我哪有这样，你误会了", commonMistakes: ["有人身攻击感", "太硬了变成反击"], correctionRules: [{ pattern: "你|你才|你才", hint: "不要把矛头指回给他。试试'这句话挺有水平的'或'我回头想想'——态度轻一点" }] },
      { name: "转场或结束", goal: "把话题自然转走，或直接结束这段对话", goodExample: "对了，刚才说的那个事进度怎么样了？", badExample: "我不想跟你说了", commonMistakes: ["转场太生硬", "带着情绪离开"], correctionRules: [{ pattern: "^.{0,5}$|算了|懒得|不想", hint: "结束可以，但不用带着'我生气了'的信号。轻轻转走——'对了，还有个事我忘了说…'" }] }
    ]
  },

  "事实锚定法": {
    id: "factAnchor",
    category: "冲突处理",
    name: "事实锚定法",
    source: "职场沟通实战总结",
    coreLogic: "用客观事实回应主观攻击，不进入情绪场",
    description: "当对方用模糊的攻击、主观指责来打击你时，用事实把对话拉回客观",
    sceneMatches: ["被甩锅/抢功劳", "被当众质疑/批评", "跨部门推诿"],
    steps: [
      { name: "找事实", goal: "从对方的攻击中提取一个可以验证的事实点", goodExample: "你刚才说的是'方案有问题'——具体是哪个部分？", badExample: "你凭什么这么说", commonMistakes: ["被对方的情绪带跑", "找不到具体的事实点"], correctionRules: [{ pattern: "凭|谁说的|你拿出|你证明", hint: "不是让他'证明'——是问他'具体是什么'。把他从情绪拉到具体的一个点上" }] },
      { name: "回事实", goal: "用你自己的事实回应，不辩解不评价", goodExample: "我上周五发的第三版里，第2-4页的数据都在里面", badExample: "你难道没看吗？", commonMistakes: ["事实里带情绪", "事实不具体"], correctionRules: [{ pattern: "你没|你难道|你根本", hint: "只说你的部分——什么时间、做了什么、结果是什么。加任何'你'的指责都会削弱事实的力量" }] },
      { name: "定方向", goal: "从争论对错转向解决问题", goodExample: "我们现在来看哪里需要改，你说说你的想法", badExample: "那还怪我？", commonMistakes: ["赢了事实但输了关系", "停不下来继续争"], correctionRules: [{ pattern: "那|所以|谁的责任", hint: "这里是转折点——不要把赢面变成战场。轻轻转向下一步：'我们下一步怎么办？'" }] }
    ]
  },

  // ==================== 边界拒绝类 ====================

  "课题分离": {
    id: "boundary",
    category: "边界拒绝",
    name: "课题分离",
    source: "阿德勒《被讨厌的勇气》",
    coreLogic: "判断「这是谁的课题」→ 不接不属于你的 → 表达关心但不代劳",
    description: "当对方把焦虑转嫁给你，或试图控制你的选择时，守住自己的边界",
    sceneMatches: ["被道德绑架/过度干涉", "被催婚", "被过度干涉"],
    steps: [
      { name: "判断课题", goal: "问自己：这个结果的最终承担者是谁", goodExample: "他开不开心是他的课题，不是我必须解决的", badExample: "我怎么能让他不高兴呢", commonMistakes: ["把别人的情绪当自己的责任", "分不清关心和代劳"], correctionRules: [{ pattern: "让.*不|怕.*不|担心.*不", hint: "停一下——谁为这个结果负责？他开不开心，是他的心在感受。你可以关心，但你不是他情绪的负责人" }] },
      { name: "不接课题", goal: "温和但坚定地不把别人的课题揽过来", goodExample: "这是你自己的决定，我尊重你的选择，同时我也不强迫你按我的来", badExample: "行行行你说了算", commonMistakes: ["不接课题≠冷漠", "要么就完全退出"], correctionRules: [{ pattern: "^.{0,8}$|行|好吧|随便", hint: "不接课题不是甩手不管。试试说'我关心你，但这件事要你自己决定'——关心和边界可以同时在" }] },
      { name: "表达关心", goal: "让对方知道你的边界不是冷漠，而是尊重", goodExample: "不管你做什么选择，我都支持你——但我不会替你选", badExample: "你自己的事，跟我没关系", commonMistakes: ["语气过于冷漠", "又退回去讨好"], correctionRules: [{ pattern: "跟我|无所谓|随便", hint: "边界不是冷漠。试试把'跟我没关系'换成'我相信你能处理好'" }] }
    ]
  },

  "果断表达法": {
    id: "assertive",
    category: "边界拒绝",
    name: "果断表达法",
    source: "沟通训练实战总结",
    coreLogic: "承认对方 → 表达立场 → 给替代方案",
    description: "需要拒绝但怕伤关系时，既不委屈自己也不攻击对方",
    sceneMatches: ["需要拒绝但说不出口", "被借钱不好意思拒绝", "被安排模糊任务"],
    steps: [
      { name: "承认对方", goal: "先肯定对方的处境或需求的合理性", goodExample: "我理解你最近手头紧，开口借钱确实不容易", badExample: "你找我借钱我也没办法啊", commonMistakes: ["跳过这步直接拒绝", "用'但是'否定前面的承认", "'承认'太敷衍"], correctionRules: [{ pattern: "但是|不过我|可是", hint: "承认之后不要用'但是'。试试用'同时'——'我理解你现在着急，同时我这边也确实不方便'" }] },
      { name: "表达立场", goal: "清晰说出你的决定和理由", goodExample: "我自己最近开销也大，暂时拿不出这笔钱——这不是客套，是真实情况", badExample: "我不借，别问我", commonMistakes: ["态度太硬失去关系", "过度解释显得心虚"], correctionRules: [{ pattern: "不行|不可以|我不想", hint: "拒绝可以更软——试试说你的处境，而不是下判断。'我暂时做不了这个'比'不行'好" }] },
      { name: "给替代方案", goal: "提供一个你能做到的可替代帮助", goodExample: "我不能借钱，但我可以帮你看看有什么省钱的办法", badExample: "你找别人吧", commonMistakes: ["不给替代，直接把路堵死", "替代方案太敷衍"], correctionRules: [{ pattern: "^.{0,5}$|没|不|不会", hint: "关系还在——给对方一点你能做的事。哪怕'我可以陪你想想其他办法'也比'我帮不了'好" }] }
    ]
  },

  "D.E.S.C.模型": {
    id: "desc",
    category: "边界拒绝",
    name: "D.E.S.C.模型",
    source: "Sharon & Gordon Bower《Asserting Yourself》",
    coreLogic: "Describe → Express → Specify → Consequences（结构化表达边界）",
    description: "需要设立边界或指出对方越界行为时的四步结构化沟通",
    sceneMatches: ["被过度干涉", "被安排模糊任务", "被甩锅/抢功劳"],
    steps: [
      { name: "描述行为", goal: "客观描述对方做的事", goodExample: "你这周已经第三次问我什么时候结婚了", badExample: "你老是催婚烦不烦", commonMistakes: ["用指责式描述", "太模糊"], correctionRules: [{ pattern: "老是|总是|天天", hint: "说具体的：时间、次数、原话。'本周第三次'比'老是催'有力量多" }] },
      { name: "表达感受", goal: "说出这件事带给你的影响", goodExample: "说实话这让我压力很大，不太想回家过年", badExample: "你这样让人很讨厌", commonMistakes: ["把感受说成对对方的攻击", "跳过这步觉得对方'应该知道'"], correctionRules: [{ pattern: "你让|你搞|你弄得", hint: "不是'你让我不开心'，是'这件事让我有压力'。主语是你自己" }] },
      { name: "明确边界", goal: "清晰说出你希望怎么样", goodExample: "以后关于找对象的事，我自己处理——有进展我会主动说，但不用提醒我", badExample: "别再问了", commonMistakes: ["边界不够具体", "说得太软失去边界感"], correctionRules: [{ pattern: "^.{0,8}$|别再|不要", hint: "边界要具体——你希望什么行为发生、什么行为停止？给对方一个清晰的标准" }] }
    ]
  },

  "灰岩法": {
    id: "greyRock",
    category: "边界拒绝",
    name: "灰岩法",
    source: "专业应对自恋型人格的沟通策略",
    coreLogic: "让自己变得像灰岩一样无趣、无反应，使操控型人格失去兴趣",
    description: "面对自恋型人格、操控型人格、情绪吸血鬼时的自保策略",
    sceneMatches: ["被甩锅/抢功劳", "被阴阳怪气/暗讽", "下属提离职要挟"],
    steps: [
      { name: "识别操控", goal: "意识到对方在尝试操控你的情绪", goodExample: "他现在说这些话是想要我生气——我生气了就是他要的", badExample: "你不尊重我", commonMistakes: ["中招，给出情绪反应", "反过来攻击对方"], correctionRules: [{ pattern: "你|你才|你竟然", hint: "他就是在要一个反应。你给了，他就赢了。先别上头——你看到他在'钓鱼'了吗？" }] },
      { name: "最小响应", goal: "给出信息量最低的回应", goodExample: "嗯。", badExample: "我不会被你操控的", commonMistakes: ["讲道理（这正好是对方要的燃料）", "回应太长"], correctionRules: [{ pattern: "^.{20,}$", hint: "太长了——说得越少越好。'嗯'、'知道了'、'好的'就够了。任何解释都是给他燃料" }] },
      { name: "能量回收", goal: "把注意力从对方身上收回自己", goodExample: "好了到此为止，我该干嘛干嘛了", badExample: "你这种态度我们没法聊", commonMistakes: ["还在想怎么回", "内耗"], correctionRules: [{ pattern: "没法|不能|怎么", hint: "别想了——不是每段对话都要'处理好'。有些对话最好的处理就是停止投入" }] }
    ]
  },

  // ==================== 亲密关系类 ====================

  "戈特曼情绪急救": {
    id: "gottmanEmergency",
    category: "亲密关系",
    name: "戈特曼情绪急救",
    source: "约翰·戈特曼《幸福的婚姻》",
    coreLogic: "先接住对方情绪 → 等情绪降温 → 再说事情",
    description: "在伴侣情绪激烈时，不急着解决问题，先接住人",
    sceneMatches: ["伴侣吵架/冷战", "翻旧账争吵", "被说'你根本不在乎我'"],
    steps: [
      { name: "停止进阶", goal: "意识到对方的情绪已经过了理性阈值", goodExample: "他现在说这些话不是针对我——是他的情绪在说话", badExample: "你冷静一下", commonMistakes: ["叫对方冷静（这往往火上浇油）", "急着解释或反驳"], correctionRules: [{ pattern: "冷静|别激动|别生气", hint: "不要说'冷静一下'——那是最快引爆的词之一。先接住：'我听到了，这件事让你很难过'" }] },
      { name: "接住情绪", goal: "承认对方情绪的存在，不评价对错", goodExample: "我听到了——这件事让你很难过，你觉得我不理解你", badExample: "好吧是我错了行了吧", commonMistakes: ["假接住→真敷衍", "用认错来跳过这步"], correctionRules: [{ pattern: "好吧|是我|行了吧|你说的对", hint: "不是要你认错——是要你接住他的感受。'我听到了，你很生气/难受/失望'是你的观察，不是你的认错" }] },
      { name: "情绪降温后沟通", goal: "等风暴过去再谈事情", goodExample: "我们现在先休息一下好不好？半小时后你愿意的话我们再聊", badExample: "你说的对，我当时不该……（直接跳到解释/道歉）", commonMistakes: ["还在情绪里就尝试理性沟通", "没有给对方缓冲时间"], correctionRules: [{ pattern: "但是|其实|我那时候", hint: "先不要——现在对方还没下来。给个时间锚：'等一会我们再说，不急'" }] }
    ]
  },

  "爱的五种语言": {
    id: "loveLang",
    category: "亲密关系",
    name: "爱的五种语言",
    source: "盖瑞·查普曼《爱的五种语言》",
    coreLogic: "识别对方接收爱的方式 → 用对方的语言表达",
    description: "解决'我做了那么多你却说感觉不到爱'的困境——可能只是频道不对",
    sceneMatches: ["冷战不说话", "被说'你根本不在乎我'", "伴侣吵架"],
    steps: [
      { name: "识别对方的爱语", goal: "判断对方主要接收爱的方式是什么", goodExample: "他不是需要礼物——他需要的是我坐下来认真听他说", badExample: "我做这么多你看不到吗", commonMistakes: ["用自己的方式去爱", "完全不了解对方"], correctionRules: [{ pattern: "做了|付出了|努力了", hint: "你付出了——但在对方频道上吗？他可能是需要陪伴的，你却给了一堆礼物。先看看他主要要什么" }] },
      { name: "表达匹配", goal: "用对方的方式去表达，而不是你的方式", goodExample: "你需要陪伴的话，这周末我专心在家，不安排别的事", badExample: "你要我怎么办，我尽力了", commonMistakes: ["继续用自己的方式表达然后抱怨对方没回应", "觉得这是'妥协'"], correctionRules: [{ pattern: "尽力|已经|还要|又", hint: "不是在说他贪心——是在说频道不对。试试从他的频道发信号，看看有什么变化" }] }
    ]
  },

  "依恋理论": {
    id: "attachmentTheory",
    category: "亲密关系",
    name: "依恋理论",
    source: "约翰·鲍比《依恋》",
    coreLogic: "识别依恋类型 → 理解行为背后的安全感需求",
    description: "看到亲密关系中的安全感问题，理解对方的'无理取闹'可能是在要连接",
    sceneMatches: ["冷战不说话", "翻旧账争吵", "被说'你根本不在乎我'"],
    steps: [
      { name: "识别反应", goal: "判断对方的反应是哪种依恋类型的表现", goodExample: "他每次我加班就发火——可能是焦虑型依恋，我的缺席触碰他不安全的开关", badExample: "他又开始无理取闹了", commonMistakes: ["给对方的行为贴负面标签", "没有把行为和安全感联系起来"], correctionRules: [{ pattern: "无理|作|纠缠|烦", hint: "试试把'他在闹'转换成'他不安全了'。很多'缠人'的行为是在说'你在吗？'" }] },
      { name: "安全感连接", goal: "用行动让对方知道你在，关系是安全的", goodExample: "我去加个班，但回来我们好好聊——大概九点", badExample: "你能不能别这样，我只是加个班", commonMistakes: ["只给逻辑不给情绪安全", "回避"], correctionRules: [{ pattern: "只是|就|又不|别担心", hint: "不要说'只是加个班'。给他一个确切的信息：'我会在X点回来，回来就陪你'——锚点是安全感的关键" }] }
    ]
  },

  "情感账户": {
    id: "emotionalAccount",
    category: "亲密关系",
    name: "情感账户",
    source: "史蒂芬·柯维延伸",
    coreLogic: "好感是存款，冲突是取款 → 保持账户余额",
    description: "用'存款/取款'的视角管理关系中的情感积累",
    sceneMatches: ["翻旧账争吵", "冷战不说话", "说了伤人的话想补救"],
    steps: [
      { name: "识账", goal: "看当下账户余额是多少", goodExample: "这段时间我忙着加班，我们很久没有一起好好说话了——账户可能快空了", badExample: "不就吵了一次架吗", commonMistakes: ["只看这一次冲突忽略长期消耗", "高估余额"], correctionRules: [{ pattern: "一次|就这一|才一次", hint: "每次冲突都在提款。如果账户本来就不多，一次冲突就可以清空。看看最近你们有多少'存款'？" }] },
      { name: "存款", goal: "主动做一些对方会在意的好事", goodExample: "我知道你最近压力也大——今天我来做饭", badExample: "对不起我下次注意", commonMistakes: ["用道歉代替存款", "只说不做"], correctionRules: [{ pattern: "对不起|抱歉|下次|以后", hint: "道歉是还债，不是存款。存款是额外的——一件对方真正在意的事，不要求即刻回报" }] }
    ]
  },

  // ==================== 接受好意类 ====================

  "接受力训练": {
    id: "acceptance",
    category: "接受好意",
    name: "接受力训练",
    source: "沟通训练实战总结",
    coreLogic: "接受赞美/好意 = 对给予者的尊重 ≠ 炫耀",
    description: "被夸了只说'没有没有'、收到好意手足无措——练习从容接受",
    sceneMatches: ["被夸/被表扬", "收到好意/机会", "被表白/示好"],
    steps: [
      { name: "停止否认", goal: "觉察到自己在下意识地推掉好意", goodExample: "我刚想说'没有没有'——然后停住了", badExample: "没有没有，我瞎弄的", commonMistakes: ["条件反射式否认", "用自贬回应赞美"], correctionRules: [{ pattern: "没有|不是|哪里|随便", hint: "你刚想推开它。停一下——深呼吸。别人的赞美是他眼里的事实。试试什么都不说，先吸一口气" }] },
      { name: "简单接收", goal: "用一个简单、真诚的方式接收", goodExample: "谢谢，我确实花了不少心思。", badExample: "还好吧，没那么夸张", commonMistakes: ["接收得太别扭", "又加了贬低自己的话"], correctionRules: [{ pattern: "但是|不过我|其实也", hint: "'谢谢'后面不要加'但是'。'谢谢你注意到'就够了——干净地收下" }] },
      { name: "连接对方", goal: "把接收变回人和人之间的连接", goodExample: "谢谢——你注意到了，我挺意外的。", badExample: "对，我这方面确实做得不错（自恋感太强）", commonMistakes: ["转向自我中心", "没有回到对方"], correctionRules: [{ pattern: "^.{0,5}谢谢$", hint: "可以再多一句——把目光转向对方：'谢谢你注意到'、'得到你的认可很重要'。接收后回到连接" }] }
    ]
  },

  "自我同情理论": {
    id: "selfCompassion",
    category: "接受好意",
    name: "自我同情理论",
    source: "克里斯汀·聂夫《自我同情》",
    coreLogic: "对自己像对好朋友一样——尤其是在失败/被批评时",
    description: "在自我批评和自我攻击的循环中跳出来，练习对自己的善意",
    sceneMatches: ["被当众质疑/批评", "被阴阳怪气/暗讽", "被说'你根本不在乎我'"],
    steps: [
      { name: "承认痛苦", goal: "对自己说'这确实很难受'——不加评判", goodExample: "被当众质疑确实很难受，任何人都会不好受", badExample: "我怎么这么没用，这点事都处理不好", commonMistakes: ["跳过承认直接跳到'振作'", "反过来攻击自己"], correctionRules: [{ pattern: "没用|不行|差|笨|傻", hint: "停——你又在攻击自己了。试试对自己说：'这确实不好受'。像你会对一个朋友说的那样" }] },
      { name: "共通人性", goal: "意识到这不是你一个人的事——每个人都经历过", goodExample: "不只我是这样——很多人被老板质疑都会难受", badExample: "只有我这么废", commonMistakes: ["觉得只有自己会这样"], correctionRules: [{ pattern: "只有|就我|别人都", hint: "你不是一个人。很多人在类似的境遇里都会这样感受。这不代表你有问题" }] },
      { name: "善意回应", goal: "给自己一句善意的、支持性的话", goodExample: "没关系。这次做得不好不代表你不好。下次会好的", badExample: "下次注意就行", commonMistakes: ["敷衍自己", "太硬了没有温度"], correctionRules: [{ pattern: "^.{0,8}$|下次|注意|改正|加油", hint: "对朋友你会怎么说？'下次加油'是教练说的。朋友会说：'没关系的，你已经很努力了'。试试把对你的朋友说的话说给自己" }] }
    ]
  },

  "冒名顶替综合征应对": {
    id: "impostorSyndrome",
    category: "接受好意",
    name: "冒名顶替综合征应对",
    source: "宝琳·R·克兰斯《冒名顶替现象》",
    coreLogic: "识别冒充心态 → 收集客观证据 → 重新整合自我认知",
    description: "总觉得自己的成功是运气好，随时怕被人发现'真面目'",
    sceneMatches: ["被夸/被表扬", "收到好意/机会", "被表白/示好"],
    steps: [
      { name: "识别声音", goal: "听到心里那个说'你不配'的声音", goodExample: "我听到了——我心里有个声音在说'他们夸错了，你根本不配'", badExample: "这次确实是运气好", commonMistakes: ["直接认同那个声音", "没意识到这是模式"], correctionRules: [{ pattern: "运气|侥幸|别人都|其实很", hint: "这是那个'冒名顶替'的声音在说话。你不是运气好——你就是有这个能力，只是你不太相信" }] },
      { name: "收集证据", goal: "找客观证据证明你的能力", goodExample: "我确实在这项目里花了三个月——每个数据都是我自己做的", badExample: "我只是做了分内事", commonMistakes: ["低估自己的贡献", "无法客观看自己"], correctionRules: [{ pattern: "分内|应该的|大家都有", hint: "不是'分内事'。你把你的贡献列出来——做你分内事的同事那么多，为什么他们在夸你？" }] },
      { name: "接纳自我定位", goal: "整合一个更准确的自我画像", goodExample: "我不是全能天才——但我也不是骗子。我是有这个能力的人", badExample: "好吧我确实做得还行", commonMistakes: ["要么全盘否定夸赞，要么突然膨胀"], correctionRules: [{ pattern: "^.{0,8}$|还行|一般|还可以", hint: "这不是谦虚。试试一句话：'我在这方面确实有能力，同时我还有很多要学。'——两个同时成立" }] }
    ]
  },

  // ==================== 影响力类 ====================

  "六大影响力原则": {
    id: "cigaldini",
    category: "影响力",
    name: "六大影响力原则",
    source: "罗伯特·西奥迪尼《影响力》",
    coreLogic: "互惠 → 承诺一致 → 社会认同 → 喜好 → 权威 → 稀缺",
    description: "在需要说服别人、推动决策时，选择最合适的说服策略",
    sceneMatches: ["需要说服对方", "跨部门推诿", "被安排模糊任务"],
    steps: [
      { name: "选择原则", goal: "从六个原则中选一个最适合当下的", goodExample: "这个场景里他最在乎的是认可——用社会认同原则比较合适", badExample: "六种全用上", commonMistakes: ["不选原则，一股脑用", "选的原则和场景不匹配"], correctionRules: [{ pattern: "^.{0,5}$", hint: "先判断对方吃哪一套——讲理的用权威，从众的用社会认同，大方的人给他机会回报（互惠）" }] },
      { name: "应用原则", goal: "把选择的原则转化为具体的沟通方式", goodExample: "（社会认同）这个方案张总和李总那边都已经推进了", badExample: "大家都这么做的（太笼统）", commonMistakes: ["应用太生硬，显得在操控", "不提供具体细节"], correctionRules: [{ pattern: "大家|别人都|行业里", hint: "更具体一点——谁说好的？哪个部门在做了？给人可验证的信号" }] }
    ]
  },

  "FBI谈判术": {
    id: "fbiNegotiation",
    category: "影响力",
    name: "FBI谈判术",
    source: "克里斯·沃斯《掌控谈话》",
    coreLogic: "镜像 → 标注情绪 → 引导对方 → 给选择",
    description: "在高强度对抗中降低阻力、创造合作空间",
    sceneMatches: ["被甩锅/抢功劳", "需要说服对方", "下属提离职要挟"],
    steps: [
      { name: "镜像", goal: "重复对方最后几个字——让他继续说", goodExample: "对方：'这方案不行。' 你：'方案不行？'", badExample: "怎么不行了，你说清楚", commonMistakes: ["急着反驳或追问", "镜像太刻意像复读机"], correctionRules: [{ pattern: "怎么|为什么|哪里|你说清楚", hint: "不要问'为什么'。试试重复他的最后三个字——像回声一样。这会让对方下意识地更多解释" }] },
      { name: "标注情绪", goal: "说出对方可能的情绪——让他觉得被理解了", goodExample: "听起来你对这个方案的方向有些担心", badExample: "我理解你的不满", commonMistakes: ["标注太笼统", "标注变成了对自己的保护"], correctionRules: [{ pattern: "^.{0,10}$|我理解", hint: "标注要具体——不是'我理解你'，而是'你似乎担心项目会延期'。帮他命名他的情绪" }] },
      { name: "给选择", goal: "抛两个都可以接受的选择", goodExample: "我们可以现在一起改方案，也可以你晚上看完了明天早上我们碰——你选哪个？", badExample: "那你说怎么办", commonMistakes: ["只给一个选择（感觉像命令）", "丢回给对方"], correctionRules: [{ pattern: "你说|你觉得|你想怎么", hint: "不要丢回去。给他两个选择——两个都是你可以接受的。让对方觉得他在掌控" }] }
    ]
  },

  "框架效应": {
    id: "framingEffect",
    category: "影响力",
    name: "框架效应",
    source: "丹尼尔·卡尼曼《思考，快与慢》",
    coreLogic: "同样的内容，换一种'框架'表达，对方的反应完全不同",
    description: "在说同一件事时，换一种说法让对方更愿意接受",
    sceneMatches: ["需要说服对方", "被安排模糊任务", "需要拒绝但说不出口"],
    steps: [
      { name: "识别当前框架", goal: "看到你现在用的'框架'是怎么让对方抗拒的", goodExample: "我在用'你不行'的框架说话——难怪他马上防御", badExample: "这人怎么不听呢", commonMistakes: ["只看到对方的抗拒看不到自己框架的问题", "坚持同一个说辞重复说"], correctionRules: [{ pattern: "不听|就是|固执|怎么", hint: "他已经把耳朵关了——不是他顽固，是你用的'框'让他不舒服。换个框试试？" }] },
      { name: "换框架", goal: "把同样的内容放进一个对方能接受的框架", goodExample: "（从风险→成果）'这个方案如果落地，能帮你们省 30% 的时间'", badExample: "（从风险到另一个风险）'你不做的话风险也很大'", commonMistakes: ["换的框架还是同质的", "框架不真实"], correctionRules: [{ pattern: "不|风险|问题|麻烦", hint: "试试转到'机会'框架——不做会有风险 → 做了会有什么收益。把'避免损失'改成'获得成果'" }] }
    ]
  },

  // ==================== 修复关系类 ====================

  "三层修复法": {
    id: "tripleRepair",
    category: "修复关系",
    name: "三层修复法",
    source: "《高难度对话》延伸 + 戈特曼修复理论",
    coreLogic: "事实层道歉 → 情感层共情 → 身份层确认价值",
    description: "说了伤人的话想修复——道歉不止一句'对不起'",
    sceneMatches: ["说了伤人的话想补救", "伴侣吵架/冷战", "被说'你根本不在乎我'"],
    steps: [
      { name: "事实层道歉", goal: "为你具体说的话或做的事道歉", goodExample: "我刚刚说你'从来不管家里'——这句话说过了，对不起", badExample: "对不起我态度不好", commonMistakes: ["道歉太笼统", "在道歉里加解释/推脱"], correctionRules: [{ pattern: "^.{0,10}$|态度|脾气|心情", hint: "具体说你说的哪句话、做的哪件事。'对不起我刚才说你'后面要接他听到的那句原话。对方要你承认的不是'态度'，是那句话" }] },
      { name: "情感层共情", goal: "承认你的话给对方带来的伤害", goodExample: "我知道这句话让你觉得我把你的付出全否定了——如果是我被这么说，我也会难过", badExample: "我也不是故意的", commonMistakes: ["跳到'我不是故意的'", "回避面对对方的情绪"], correctionRules: [{ pattern: "不是|故意|本意|以为", hint: "先不要说你不是故意的——先说他是什么感受。'我知道你听了会觉得被全盘否定'——先让对方觉得你看见了" }] },
      { name: "身份层确认", goal: "确认对方的价值，修复被你的话威胁到的'身份感'", goodExample: "其实我知道你为家里做了很多——那些日常的小事都是你在操心。那句话不是在否定你这个人", badExample: "你当然是个好妈妈/好同事……", commonMistakes: ["这个层的确认太空洞", "跳过这层"], correctionRules: [{ pattern: "当然是|肯定是|你当然", hint: "不要用'当然'——太轻。说具体：'我看到了你每天早上……'、'我记得你上周……'——用细节确认他的价值" }] }
    ]
  },

  "情绪急救法": {
    id: "emotionalFirstAid",
    category: "修复关系",
    name: "情绪急救法",
    source: "沟通训练实战总结",
    coreLogic: "先止血 → 再清创 → 最后缝合（三步情绪修复）",
    description: "自己的情绪被激发后的急救自处",
    sceneMatches: ["被当众质疑/批评", "被阴阳怪气/暗讽", "翻旧账争吵"],
    steps: [
      { name: "止血", goal: "在情绪最高点暂停——不继续对话", goodExample: "我现在很激动——给我两分钟，我出去喝口水", badExample: "继续说但有攻击性", commonMistakes: ["压着情绪继续说", "突然离开不解释"], correctionRules: [{ pattern: "^.{0,3}$", hint: "给自己一个刹车——'我有点激动，停一下'。不解释、不攻击、不逃跑。就暂停" }] },
      { name: "清创", goal: "一个人时面对情绪，不压抑也不放大", goodExample: "我生气是因为那句'你自己看过吗'让我觉得自己不被信任", badExample: "别想了别想了", commonMistakes: ["压抑/转移注意力", "让愤怒持续发酵"], correctionRules: [{ pattern: "^.{0,5}$|没事|算了|不想", hint: "先看着它——命名你的情绪。不是因为'他那句话'，而是因为'那句话让我觉得……'" }] },
      { name: "缝合", goal: "情绪平复后决定下一步：不处理 / 用NVC表达 / 等合适时机再说", goodExample: "这件事需要处理，但不是现在。明天约一个会后的时间聊", badExample: "算了，不说了（压抑）", commonMistakes: ["要么立即翻脸，要么永远压下", "不做决定就回到环境里"], correctionRules: [{ pattern: "算了|不说|就这样|无所谓", hint: "'算了'不是真的算了——它会攒到下次。做决定：什么时候、什么方式处理。哪怕决定'不处理'也要是一个有意识的决定" }] }
    ]
  }

};

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

// ========== Skill 查询工具 ==========
function getSkill(methodName) {
  return METHOD_SKILLS[methodName] || METHOD_SKILLS["非暴力沟通"];
}

function getSkillsForSceneType(sceneType) {
  const names = SCENE_ANALYZER_SKILL.sceneToMethods[sceneType] || [];
  return names.map(n => ({ name: n, skill: getSkill(n) }));
}

function getDefaultMethod() {
  return getSkill("非暴力沟通");
}

function getMethodNames() {
  return Object.keys(METHOD_SKILLS);
}
