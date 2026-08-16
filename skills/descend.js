/**
 * TakeTwo Skill — 降维回应法 (descend) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["降维回应法"] = {
    id: "descend",
    category: "冲突处理",
    name: "降维回应法",
    source: "沟通训练实战总结",
    version: "1.0.0",
    description: "面对阴阳怪气、暗讽、道德绑架时不进入对方的战场：不解释、不自证、不反击、给软钉子。适用：被阴阳怪气/暗讽、被道德绑架/过度干涉、被催婚。不适用：对方是真诚求助或正常沟通（会显得回避）、需要建立深度关系时。",
    notFor: ["对方真诚求助/正常沟通", "需要建立深度关系"],
    coreLogic: "不解释 → 不自证 → 不反击 → 给软钉子",
    sceneMatches: ["被阴阳怪气/暗讽", "被道德绑架/过度干涉", "被催婚"],
    steps: [
      { name: "识别陷阱", goal: "先意识到对方在把你往哪个方向带", goodExample: "他这句话是想让我开始解释——让我先解释，我一解释就弱了", badExample: "他怎么这样", commonMistakes: ["直接中招，开始解释或反击", "没意识到对方在设场"], correctionRules: [{ pattern: "^(?!.*(想让我|钓鱼|设套|诱导|激))", hint: "暂停——看看对方是不是在把你往某个方向推：让你解释？让你发火？让你服软？先识别他想要你做什么反应" }] },
      { name: "不进场", goal: "用一句话轻轻带过，不进入对方的逻辑", goodExample: "你这么说挺有意思的", badExample: "我哪有这样，你误会了", commonMistakes: ["有人身攻击感", "太硬了变成反击"], correctionRules: [{ pattern: "你|你才|你才", hint: "不要把矛头指回给他。试试'这句话挺有水平的'或'我回头想想'——态度轻一点" }] },
      { name: "转场或结束", goal: "把话题自然转走，或直接结束这段对话", goodExample: "对了，刚才说的那个事进度怎么样了？", badExample: "我不想跟你说了", commonMistakes: ["转场太生硬", "带着情绪离开"], correctionRules: [{ pattern: "^.{0,5}$|算了|懒得|不想", hint: "结束可以，但不用带着'我生气了'的信号。轻轻转走——'对了，还有个事我忘了说…'" }] }
    ]
  };
})();
