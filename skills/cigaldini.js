/**
 * TakeTwo Skill — 六大影响力原则 (cigaldini) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["六大影响力原则"] = {
    id: "cigaldini",
    category: "影响力",
    name: "六大影响力原则",
    source: "罗伯特·西奥迪尼《影响力》",
    version: "1.0.0",
    description: "在需要说服别人、推动决策时，从互惠/承诺一致/社会认同/喜好/权威/稀缺中选择最合适的策略。适用：需要说服对方、跨部门推诿、被安排模糊任务。不适用：真诚沟通/亲密关系场景（容易显得操控）、对重要关系需慎用。",
    notFor: ["真诚沟通/亲密关系场景", "对重要关系（显操控）"],
    coreLogic: "互惠 → 承诺一致 → 社会认同 → 喜好 → 权威 → 稀缺",
    sceneMatches: ["需要说服对方", "跨部门推诿", "被安排模糊任务"],
    steps: [
      { name: "选择原则", goal: "从六个原则中选一个最适合当下的", goodExample: "这个场景里他最在乎的是认可——用社会认同原则比较合适", badExample: "六种全用上", commonMistakes: ["不选原则，一股脑用", "选的原则和场景不匹配"], correctionRules: [{ pattern: "^.{0,5}$", hint: "先判断对方吃哪一套——讲理的用权威，从众的用社会认同，大方的人给他机会回报（互惠）" }] },
      { name: "应用原则", goal: "把选择的原则转化为具体的沟通方式", goodExample: "（社会认同）这个方案张总和李总那边都已经推进了", badExample: "大家都这么做的（太笼统）", commonMistakes: ["应用太生硬，显得在操控", "不提供具体细节"], correctionRules: [{ pattern: "大家|别人都|行业里", hint: "更具体一点——谁说好的？哪个部门在做了？给人可验证的信号" }] }
    ]
  };
})();
