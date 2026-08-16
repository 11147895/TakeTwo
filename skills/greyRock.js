/**
 * TakeTwo Skill — 灰岩法 (greyRock) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["灰岩法"] = {
    id: "greyRock",
    category: "边界拒绝",
    name: "灰岩法",
    source: "专业应对自恋型人格的沟通策略",
    version: "1.0.0",
    description: "面对自恋型/操控型人格、情绪吸血鬼时的自保策略：让自己像灰岩一样无趣、无反应，使其失去兴趣。适用：被甩锅/抢功劳、被阴阳怪气/暗讽、下属提离职要挟。不适用：对方是真诚沟通/关系可修复（会显冷淡误事）、需要推进合作时。",
    notFor: ["对方真诚沟通/关系可修复", "需要推进合作"],
    coreLogic: "让自己变得像灰岩一样无趣、无反应，使操控型人格失去兴趣",
    sceneMatches: ["被甩锅/抢功劳", "被阴阳怪气/暗讽", "下属提离职要挟"],
    steps: [
      { name: "识别操控", goal: "意识到对方在尝试操控你的情绪", goodExample: "他现在说这些话是想要我生气——我生气了就是他要的", badExample: "你不尊重我", commonMistakes: ["中招，给出情绪反应", "反过来攻击对方"], correctionRules: [{ pattern: "你|你才|你竟然", hint: "他就是在要一个反应。你给了，他就赢了。先别上头——你看到他在'钓鱼'了吗？" }] },
      { name: "最小响应", goal: "给出信息量最低的回应", goodExample: "嗯。", badExample: "我不会被你操控的", commonMistakes: ["讲道理（这正好是对方要的燃料）", "回应太长"], correctionRules: [{ pattern: "^.{20,}$", hint: "太长了——说得越少越好。'嗯'、'知道了'、'好的'就够了。任何解释都是给他燃料" }] },
      { name: "能量回收", goal: "把注意力从对方身上收回自己", goodExample: "好了到此为止，我该干嘛干嘛了", badExample: "你这种态度我们没法聊", commonMistakes: ["还在想怎么回", "内耗"], correctionRules: [{ pattern: "没法|不能|怎么", hint: "别想了——不是每段对话都要'处理好'。有些对话最好的处理就是停止投入" }] }
    ]
  };
})();
