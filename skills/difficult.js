/**
 * TakeTwo Skill — 高难度对话 (difficult) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["高难度对话"] = {
    id: "difficult",
    category: "冲突处理",
    name: "高难度对话",
    source: "道格拉斯·斯通《高难度对话》",
    version: "1.0.0",
    description: "把棘手对话拆成事实层→感受层→身份层逐层处理，不混淆。适用：需要拒绝但说不出口、说了伤人的话想补救、跨部门推诿。不适用：对方拒绝沟通、关系已严重破裂需先修复。",
    notFor: ["对方拒绝沟通", "关系严重破裂需先修复"],
    coreLogic: "三层对话：事实层 → 感受层 → 身份层",
    sceneMatches: ["需要拒绝但说不出口", "说了伤人的话想补救", "跨部门推诿"],
    steps: [
      { name: "事实层", goal: "搞清楚到底发生了什么——各方的版本", goodExample: "我看到的和老板看到的不一样", badExample: "他就是在撒谎", commonMistakes: ["把对方的版本当谎言", "只认自己的版本"], correctionRules: [{ pattern: "撒谎|胡说|骗|假的", hint: "你可以不同意，但对方可能有不同的视角。试试说'我看到的和你的不一样'而不是'你在撒谎'" }] },
      { name: "感受层", goal: "承认双方的感受都是真实的", goodExample: "我理解你很生气，因为你觉得没被尊重", badExample: "你别生气了，不是什么大事", commonMistakes: ["否定对方感受", "只关注自己的感受"], correctionRules: [{ pattern: "别|不要|不值得|没必要", hint: "不要说'不值得生气'——对方生气了那是真的。先承认'你生气了'，再往下走" }] },
      { name: "身份层", goal: "看到这件事对彼此身份认同的冲击", goodExample: "你觉得被质疑了能力——这刺痛了你", badExample: "我不是那个意思，你想多了", commonMistakes: ["回避这层", "说'你想多了'"], correctionRules: [{ pattern: "想多了|小题大做|敏感", hint: "'你想多了'是最伤人的四句话之一。试试说'我可能说的话让你觉得……'——先接住" }] }
    ]
  };
})();
