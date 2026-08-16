/**
 * TakeTwo Skill — 爱的五种语言 (loveLang) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["爱的五种语言"] = {
    id: "loveLang",
    category: "亲密关系",
    name: "爱的五种语言",
    source: "盖瑞·查普曼《爱的五种语言》",
    version: "1.0.0",
    description: "识别对方接收爱的方式，用对方的语言表达，解决'我做了那么多你却说感觉不到爱'。适用：冷战不说话、被说'你根本不在乎我'、伴侣吵架。不适用：有即时未解冲突时（需先情绪急救）、对方拒绝沟通时。",
    notFor: ["有即时未解冲突需先急救", "对方拒绝沟通"],
    coreLogic: "识别对方接收爱的方式 → 用对方的语言表达",
    sceneMatches: ["冷战不说话", "被说'你根本不在乎我'", "伴侣吵架"],
    steps: [
      { name: "识别对方的爱语", goal: "判断对方主要接收爱的方式是什么", goodExample: "他不是需要礼物——他需要的是我坐下来认真听他说", badExample: "我做这么多你看不到吗", commonMistakes: ["用自己的方式去爱", "完全不了解对方"], correctionRules: [{ pattern: "做了|付出了|努力了", hint: "你付出了——但在对方频道上吗？他可能是需要陪伴的，你却给了一堆礼物。先看看他主要要什么" }] },
      { name: "表达匹配", goal: "用对方的方式去表达，而不是你的方式", goodExample: "你需要陪伴的话，这周末我专心在家，不安排别的事", badExample: "你要我怎么办，我尽力了", commonMistakes: ["继续用自己的方式表达然后抱怨对方没回应", "觉得这是'妥协'"], correctionRules: [{ pattern: "尽力|已经|还要|又", hint: "不是在说他贪心——是在说频道不对。试试从他的频道发信号，看看有什么变化" }] }
    ]
  };
})();
