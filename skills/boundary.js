/**
 * TakeTwo Skill — 课题分离 (boundary) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["课题分离"] = {
    id: "boundary",
    category: "边界拒绝",
    name: "课题分离",
    source: "阿德勒《被讨厌的勇气》",
    version: "1.0.0",
    description: "判断'这是谁的课题'，不接不属于你的，表达关心但不代劳。适用：被道德绑架/过度干涉、被催婚、被过度干涉。不适用：确实是你的课题/责任时、对方需要你的实际帮助时。",
    notFor: ["确属己方责任/课题", "对方需要实际帮助"],
    coreLogic: "判断「这是谁的课题」→ 不接不属于你的 → 表达关心但不代劳",
    sceneMatches: ["被道德绑架/过度干涉", "被催婚", "被过度干涉"],
    steps: [
      { name: "判断课题", goal: "问自己：这个结果的最终承担者是谁", goodExample: "他开不开心是他的课题，不是我必须解决的", badExample: "我怎么能让他不高兴呢", commonMistakes: ["把别人的情绪当自己的责任", "分不清关心和代劳"], correctionRules: [{ pattern: "让.*不|怕.*不|担心.*不", hint: "停一下——谁为这个结果负责？他开不开心，是他的心在感受。你可以关心，但你不是他情绪的负责人" }] },
      { name: "不接课题", goal: "温和但坚定地不把别人的课题揽过来", goodExample: "这是你自己的决定，我尊重你的选择，同时我也不强迫你按我的来", badExample: "行行行你说了算", commonMistakes: ["不接课题≠冷漠", "要么就完全退出"], correctionRules: [{ pattern: "^.{0,8}$|行|好吧|随便", hint: "不接课题不是甩手不管。试试说'我关心你，但这件事要你自己决定'——关心和边界可以同时在" }] },
      { name: "表达关心", goal: "让对方知道你的边界不是冷漠，而是尊重", goodExample: "不管你做什么选择，我都支持你——但我不会替你选", badExample: "你自己的事，跟我没关系", commonMistakes: ["语气过于冷漠", "又退回去讨好"], correctionRules: [{ pattern: "跟我|无所谓|随便", hint: "边界不是冷漠。试试把'跟我没关系'换成'我相信你能处理好'" }] }
    ]
  };
})();
