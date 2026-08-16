/**
 * TakeTwo Skill — CRIB法则 (crib) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["CRIB法则"] = {
    id: "crib",
    category: "冲突处理",
    name: "CRIB法则",
    source: "《关键对话》延伸",
    version: "1.0.0",
    description: "双方观点冲突时先找共同目标，再坦诚承认分歧、共同创造第三种方案。适用：跨部门推诿、被安排模糊任务、需要说服对方。不适用：对方毫无合作意愿、你需要单方面拒绝而非共识。",
    notFor: ["对方毫无合作意愿", "需要单方面拒绝而非共识"],
    coreLogic: "Commit → Recognize → Invent → Brainstorm（达成共识的四步）",
    sceneMatches: ["跨部门推诿", "被安排模糊任务", "需要说服对方"],
    steps: [
      { name: "承诺共同目标", goal: "先找到双方都想要的东西", goodExample: "我们都希望这个项目能按期上线，对吧？", badExample: "你说的那些行不通", commonMistakes: ["忘了先建立共同目标", "跳过直接进入争论"], correctionRules: [{ pattern: "^.{0,15}$", hint: "先不说方案——你和他有什么共同的目标？找到那个共同的东西，从那里开始" }] },
      { name: "承认分歧", goal: "不回避，直接说'我们在这里不一样'", goodExample: "你对进度的判断和我不同", badExample: "你说的有问题", commonMistakes: ["把分歧当对方的错误", "绕开分歧"], correctionRules: [{ pattern: "错|不对|有问题", hint: "分歧不是谁错了——是视角不同。试试说'我看到的不太一样'而不是'你错了'" }] },
      { name: "提出新方案", goal: "基于共同目标创造性地提出第三种方案", goodExample: "要不我们先做A部分？这样你的优先和我的优先都照顾到了", badExample: "那就按我说的来", commonMistakes: ["只抛方案不给理由", "不是真正的'共同'"], correctionRules: [{ pattern: "我觉得|我认为|我的想法", hint: "方案可以是你提出的，但要提到它怎么同时满足双方的需求" }] }
    ]
  };
})();
