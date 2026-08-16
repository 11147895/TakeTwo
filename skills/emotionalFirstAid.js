/**
 * TakeTwo Skill — 情绪急救法 (emotionalFirstAid) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["情绪急救法"] = {
    id: "emotionalFirstAid",
    category: "修复关系",
    name: "情绪急救法",
    source: "沟通训练实战总结",
    version: "1.0.0",
    description: "自己的情绪被激发后的急救自处：先止血→清创→缝合。适用：被当众质疑/批评后情绪上头、被阴阳怪气/暗讽、翻旧账争吵。不适用：情绪平稳需要对话技巧时、场合要求你当场回应无法离场时。",
    notFor: ["情绪平稳需要对话技巧", "场合要求当场回应无法离场"],
    coreLogic: "先止血 → 再清创 → 最后缝合（三步情绪修复）",
    sceneMatches: ["被当众质疑/批评", "被阴阳怪气/暗讽", "翻旧账争吵"],
    steps: [
      { name: "止血", goal: "在情绪最高点暂停——不继续对话", goodExample: "我现在很激动——给我两分钟，我出去喝口水", badExample: "继续说但有攻击性", commonMistakes: ["压着情绪继续说", "突然离开不解释"], correctionRules: [{ pattern: "^.{0,3}$", hint: "给自己一个刹车——'我有点激动，停一下'。不解释、不攻击、不逃跑。就暂停" }] },
      { name: "清创", goal: "一个人时面对情绪，不压抑也不放大", goodExample: "我生气是因为那句'你自己看过吗'让我觉得自己不被信任", badExample: "别想了别想了", commonMistakes: ["压抑/转移注意力", "让愤怒持续发酵"], correctionRules: [{ pattern: "^.{0,5}$|没事|算了|不想", hint: "先看着它——命名你的情绪。不是因为'他那句话'，而是因为'那句话让我觉得……'" }] },
      { name: "缝合", goal: "情绪平复后决定下一步：不处理 / 用NVC表达 / 等合适时机再说", goodExample: "这件事需要处理，但不是现在。明天约一个会后的时间聊", badExample: "算了，不说了（压抑）", commonMistakes: ["要么立即翻脸，要么永远压下", "不做决定就回到环境里"], correctionRules: [{ pattern: "算了|不说|就这样|无所谓", hint: "'算了'不是真的算了——它会攒到下次。做决定：什么时候、什么方式处理。哪怕决定'不处理'也要是一个有意识的决定" }] }
    ]
  };
})();
