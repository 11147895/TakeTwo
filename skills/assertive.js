/**
 * TakeTwo Skill — 果断表达法 (assertive) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["果断表达法"] = {
    id: "assertive",
    category: "边界拒绝",
    name: "果断表达法",
    source: "沟通训练实战总结",
    version: "1.0.0",
    description: "需要拒绝但怕伤关系时，既不委屈自己也不攻击对方：承认对方→表达立场→给替代方案。适用：需要拒绝但说不出口、被借钱不好意思拒绝、被安排模糊任务。不适用：你其实想答应时、对方是恶意操控（先识别）。",
    notFor: ["你其实想答应", "对方恶意操控需先识别"],
    coreLogic: "承认对方 → 表达立场 → 给替代方案",
    sceneMatches: ["需要拒绝但说不出口", "被借钱不好意思拒绝", "被安排模糊任务"],
    steps: [
      { name: "承认对方", goal: "先肯定对方的处境或需求的合理性", goodExample: "我理解你最近手头紧，开口借钱确实不容易", badExample: "你找我借钱我也没办法啊", commonMistakes: ["跳过这步直接拒绝", "用'但是'否定前面的承认", "'承认'太敷衍"], correctionRules: [{ pattern: "但是|不过我|可是", hint: "承认之后不要用'但是'。试试用'同时'——'我理解你现在着急，同时我这边也确实不方便'" }] },
      { name: "表达立场", goal: "清晰说出你的决定和理由", goodExample: "我自己最近开销也大，暂时拿不出这笔钱——这不是客套，是真实情况", badExample: "我不借，别问我", commonMistakes: ["态度太硬失去关系", "过度解释显得心虚"], correctionRules: [{ pattern: "不行|不可以|我不想", hint: "拒绝可以更软——试试说你的处境，而不是下判断。'我暂时做不了这个'比'不行'好" }] },
      { name: "给替代方案", goal: "提供一个你能做到的可替代帮助", goodExample: "我不能借钱，但我可以帮你看看有什么省钱的办法", badExample: "你找别人吧", commonMistakes: ["不给替代，直接把路堵死", "替代方案太敷衍"], correctionRules: [{ pattern: "^.{0,5}$|没|不|不会", hint: "关系还在——给对方一点你能做的事。哪怕'我可以陪你想想其他办法'也比'我帮不了'好" }] }
    ]
  };
})();
