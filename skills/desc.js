/**
 * TakeTwo Skill — D.E.S.C.模型 (desc) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["D.E.S.C.模型"] = {
    id: "desc",
    category: "边界拒绝",
    name: "D.E.S.C.模型",
    source: "Sharon & Gordon Bower《Asserting Yourself》",
    version: "1.0.0",
    description: "描述行为→表达感受→明确边界→后果，结构化设立边界。适用：被过度干涉、被安排模糊任务、被甩锅/抢功劳。不适用：对方已理解无需设限、关系需先修复。",
    notFor: ["对方已理解无需设限", "关系需先修复"],
    coreLogic: "Describe → Express → Specify → Consequences（结构化表达边界）",
    sceneMatches: ["被过度干涉", "被安排模糊任务", "被甩锅/抢功劳"],
    steps: [
      { name: "描述行为", goal: "客观描述对方做的事", goodExample: "你这周已经第三次问我什么时候结婚了", badExample: "你老是催婚烦不烦", commonMistakes: ["用指责式描述", "太模糊"], correctionRules: [{ pattern: "老是|总是|天天", hint: "说具体的：时间、次数、原话。'本周第三次'比'老是催'有力量多" }] },
      { name: "表达感受", goal: "说出这件事带给你的影响", goodExample: "说实话这让我压力很大，不太想回家过年", badExample: "你这样让人很讨厌", commonMistakes: ["把感受说成对对方的攻击", "跳过这步觉得对方'应该知道'"], correctionRules: [{ pattern: "你让|你搞|你弄得", hint: "不是'你让我不开心'，是'这件事让我有压力'。主语是你自己" }] },
      { name: "明确边界", goal: "清晰说出你希望怎么样", goodExample: "以后关于找对象的事，我自己处理——有进展我会主动说，但不用提醒我", badExample: "别再问了", commonMistakes: ["边界不够具体", "说得太软失去边界感"], correctionRules: [{ pattern: "^.{0,8}$|别再|不要", hint: "边界要具体——你希望什么行为发生、什么行为停止？给对方一个清晰的标准" }] }
    ]
  };
})();
