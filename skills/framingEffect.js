/**
 * TakeTwo Skill — 框架效应 (framingEffect) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["框架效应"] = {
    id: "framingEffect",
    category: "影响力",
    name: "框架效应",
    source: "丹尼尔·卡尼曼《思考，快与慢》",
    version: "1.0.0",
    description: "同一件事换一种'框架'表达，对方的反应完全不同——在说同一件事时换个说法让对方更愿接受。适用：需要说服对方、被安排模糊任务、需要拒绝但说不出口。不适用：需要诚实直述时（纯换框会失真）、激烈对抗谈判时。",
    notFor: ["需要诚实直述", "激烈对抗谈判"],
    coreLogic: "同样的内容，换一种'框架'表达，对方的反应完全不同",
    sceneMatches: ["需要说服对方", "被安排模糊任务", "需要拒绝但说不出口"],
    steps: [
      { name: "识别当前框架", goal: "看到你现在用的'框架'是怎么让对方抗拒的", goodExample: "我在用'你不行'的框架说话——难怪他马上防御", badExample: "这人怎么不听呢", commonMistakes: ["只看到对方的抗拒看不到自己框架的问题", "坚持同一个说辞重复说"], correctionRules: [{ pattern: "不听|就是|固执|怎么", hint: "他已经把耳朵关了——不是他顽固，是你用的'框'让他不舒服。换个框试试？" }] },
      { name: "换框架", goal: "把同样的内容放进一个对方能接受的框架", goodExample: "（从风险→成果）'这个方案如果落地，能帮你们省 30% 的时间'", badExample: "（从风险到另一个风险）'你不做的话风险也很大'", commonMistakes: ["换的框架还是同质的", "框架不真实"], correctionRules: [{ pattern: "不|风险|问题|麻烦", hint: "试试转到'机会'框架——不做会有风险 → 做了会有什么收益。把'避免损失'改成'获得成果'" }] }
    ]
  };
})();
