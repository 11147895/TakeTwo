/**
 * TakeTwo Skill — 自我同情理论 (selfCompassion) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["自我同情理论"] = {
    id: "selfCompassion",
    category: "接受好意",
    name: "自我同情理论",
    source: "克里斯汀·聂夫《自我同情》",
    version: "1.0.0",
    description: "在自我批评和自我攻击的循环里跳出来，对自己像对好朋友一样。适用：被当众质疑/批评后自我攻击、被阴阳怪气/暗讽后内耗、被说'你根本不在乎我'。不适用：需要对外沟通话术时（这是对内安抚）、需立刻采取对外行动时。",
    notFor: ["需要对外沟通话术", "需立刻采取对外行动"],
    coreLogic: "对自己像对好朋友一样——尤其是在失败/被批评时",
    sceneMatches: ["被当众质疑/批评", "被阴阳怪气/暗讽", "被说'你根本不在乎我'"],
    steps: [
      { name: "承认痛苦", goal: "对自己说'这确实很难受'——不加评判", goodExample: "被当众质疑确实很难受，任何人都会不好受", badExample: "我怎么这么没用，这点事都处理不好", commonMistakes: ["跳过承认直接跳到'振作'", "反过来攻击自己"], correctionRules: [{ pattern: "没用|不行|差|笨|傻", hint: "停——你又在攻击自己了。试试对自己说：'这确实不好受'。像你会对一个朋友说的那样" }] },
      { name: "共通人性", goal: "意识到这不是你一个人的事——每个人都经历过", goodExample: "不只我是这样——很多人被老板质疑都会难受", badExample: "只有我这么废", commonMistakes: ["觉得只有自己会这样"], correctionRules: [{ pattern: "只有|就我|别人都", hint: "你不是一个人。很多人在类似的境遇里都会这样感受。这不代表你有问题" }] },
      { name: "善意回应", goal: "给自己一句善意的、支持性的话", goodExample: "没关系。这次做得不好不代表你不好。下次会好的", badExample: "下次注意就行", commonMistakes: ["敷衍自己", "太硬了没有温度"], correctionRules: [{ pattern: "^.{0,8}$|下次|注意|改正|加油", hint: "对朋友你会怎么说？'下次加油'是教练说的。朋友会说：'没关系的，你已经很努力了'。试试把对你的朋友说的话说给自己" }] }
    ]
  };
})();
