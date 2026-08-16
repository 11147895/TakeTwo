/**
 * TakeTwo Skill — 关键对话 (crucial) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["关键对话"] = {
    id: "crucial",
    category: "冲突处理",
    name: "关键对话",
    source: "科里·帕特森《关键对话》",
    version: "1.0.0",
    description: "高风险、情绪化、观点分歧的对话中保持建设性。适用：被甩锅/抢功劳、跨部门推诿、需要拒绝但说不出口。不适用：对方持续攻击无合作意愿（先自保）、权力悬殊过大。",
    notFor: ["对方无合作意愿持续对抗", "权力悬殊过大"],
    coreLogic: "从心开始 → 创造安全 → 陈述事实 → 了解对方动机",
    sceneMatches: ["被甩锅/抢功劳", "跨部门推诿", "需要拒绝但说不出口"],
    steps: [
      { name: "从心开始", goal: "明确你真正想要的是什么（不是想赢，不是想证明自己）", goodExample: "我想要的是一个能合作的关系，不是我赢他输", badExample: "我想让他知道他错了", commonMistakes: ["想赢/想报复", "目标模糊"], correctionRules: [{ pattern: "让.*知道|赢|证明|让他", hint: "停一下——你真正想要的是什么？让他认错是手段，不是目的。你最终想要什么样的结果？" }] },
      { name: "创造安全", goal: "让对方知道你不是在攻击，让对话安全", goodExample: "我不是要否定你，我是想把这个事做好", badExample: "你听我说", commonMistakes: ["忘了铺垫安全感", "上来就说问题"], correctionRules: [{ pattern: "你|你这|你的", hint: "先不要直奔问题。先给一句安全感的话——'我不是来吵架的'或'我其实很尊重你的判断'" }] },
      { name: "陈述事实", goal: "从你的视角客观陈述，不评判对方", goodExample: "我注意到方案改了三次，我不太知道每次改的原因", badExample: "你每次改都不跟我说理由", commonMistakes: ["用指责的语气说事实", "跳过事实直接说结论"], correctionRules: [{ pattern: "你每次|你总是|你就是", hint: "试试'我注意到……'而不是'你总是……'——前者是事实，后者是攻击" }] },
      { name: "了解动机", goal: "真诚地询问对方的想法，不预判", goodExample: "你当时的考虑是什么？我想听听你的角度", badExample: "为什么改？（质问语气）", commonMistakes: ["假装问实际上在审判", "没有给真空间让对方说"], correctionRules: [{ pattern: "\\?$", hint: "问题本身没问题——语气是关键。你真的想听对方的回答，还是想说'你怎么搞的'？" }] }
    ]
  };
})();
