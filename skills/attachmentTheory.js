/**
 * TakeTwo Skill — 依恋理论 (attachmentTheory) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["依恋理论"] = {
    id: "attachmentTheory",
    category: "亲密关系",
    name: "依恋理论",
    source: "约翰·鲍比《依恋》",
    version: "1.0.0",
    description: "识别依恋类型，理解对方的'无理取闹'可能是在要连接、要安全感。适用：冷战不说话、翻旧账争吵、被说'你根本不在乎我'。不适用：需要即时行动话术时（这是理解框架而非话术）、冲突高潮中。",
    notFor: ["需要即时行动话术", "冲突高潮中"],
    coreLogic: "识别依恋类型 → 理解行为背后的安全感需求",
    sceneMatches: ["冷战不说话", "翻旧账争吵", "被说'你根本不在乎我'"],
    steps: [
      { name: "识别反应", goal: "判断对方的反应是哪种依恋类型的表现", goodExample: "他每次我加班就发火——可能是焦虑型依恋，我的缺席触碰他不安全的开关", badExample: "他又开始无理取闹了", commonMistakes: ["给对方的行为贴负面标签", "没有把行为和安全感联系起来"], correctionRules: [{ pattern: "无理|作|纠缠|烦", hint: "试试把'他在闹'转换成'他不安全了'。很多'缠人'的行为是在说'你在吗？'" }] },
      { name: "安全感连接", goal: "用行动让对方知道你在，关系是安全的", goodExample: "我去加个班，但回来我们好好聊——大概九点", badExample: "你能不能别这样，我只是加个班", commonMistakes: ["只给逻辑不给情绪安全", "回避"], correctionRules: [{ pattern: "只是|就|又不|别担心", hint: "不要说'只是加个班'。给他一个确切的信息：'我会在X点回来，回来就陪你'——锚点是安全感的关键" }] }
    ]
  };
})();
