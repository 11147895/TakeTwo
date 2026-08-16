/**
 * TakeTwo Skill — 事实锚定法 (factAnchor) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["事实锚定法"] = {
    id: "factAnchor",
    category: "冲突处理",
    name: "事实锚定法",
    source: "职场沟通实战总结",
    version: "1.0.0",
    description: "当对方用模糊的攻击、主观指责打击你时，用客观事实把对话拉回客观。适用：被甩锅/抢功劳、被当众质疑/批评、跨部门推诿。不适用：对方的攻击源于纯情绪而非事实（需先安抚情绪）、纯情绪安抚场景。",
    notFor: ["对方纯情绪化攻击需先安抚", "纯情绪安抚场景"],
    coreLogic: "用客观事实回应主观攻击，不进入情绪场",
    sceneMatches: ["被甩锅/抢功劳", "被当众质疑/批评", "跨部门推诿"],
    steps: [
      { name: "找事实", goal: "从对方的攻击中提取一个可以验证的事实点", goodExample: "你刚才说的是'方案有问题'——具体是哪个部分？", badExample: "你凭什么这么说", commonMistakes: ["被对方的情绪带跑", "找不到具体的事实点"], correctionRules: [{ pattern: "凭|谁说的|你拿出|你证明", hint: "不是让他'证明'——是问他'具体是什么'。把他从情绪拉到具体的一个点上" }] },
      { name: "回事实", goal: "用你自己的事实回应，不辩解不评价", goodExample: "我上周五发的第三版里，第2-4页的数据都在里面", badExample: "你难道没看吗？", commonMistakes: ["事实里带情绪", "事实不具体"], correctionRules: [{ pattern: "你没|你难道|你根本", hint: "只说你的部分——什么时间、做了什么、结果是什么。加任何'你'的指责都会削弱事实的力量" }] },
      { name: "定方向", goal: "从争论对错转向解决问题", goodExample: "我们现在来看哪里需要改，你说说你的想法", badExample: "那还怪我？", commonMistakes: ["赢了事实但输了关系", "停不下来继续争"], correctionRules: [{ pattern: "那|所以|谁的责任", hint: "这里是转折点——不要把赢面变成战场。轻轻转向下一步：'我们下一步怎么办？'" }] }
    ]
  };
})();
