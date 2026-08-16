/**
 * TakeTwo Skill — FBI谈判术 (fbiNegotiation) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["FBI谈判术"] = {
    id: "fbiNegotiation",
    category: "影响力",
    name: "FBI谈判术",
    source: "克里斯·沃斯《掌控谈话》",
    version: "1.0.0",
    description: "在高强度对抗中降低阻力、创造合作空间：镜像→标注情绪→引导→给选择。适用：被甩锅/抢功劳、需要说服对方、下属提离职要挟。不适用：日常普通对话（过度使用显怪异）、亲密关系坦诚场合。",
    notFor: ["日常普通对话", "亲密关系坦诚场合"],
    coreLogic: "镜像 → 标注情绪 → 引导对方 → 给选择",
    sceneMatches: ["被甩锅/抢功劳", "需要说服对方", "下属提离职要挟"],
    steps: [
      { name: "镜像", goal: "重复对方最后几个字——让他继续说", goodExample: "对方：'这方案不行。' 你：'方案不行？'", badExample: "怎么不行了，你说清楚", commonMistakes: ["急着反驳或追问", "镜像太刻意像复读机"], correctionRules: [{ pattern: "怎么|为什么|哪里|你说清楚", hint: "不要问'为什么'。试试重复他的最后三个字——像回声一样。这会让对方下意识地更多解释" }] },
      { name: "标注情绪", goal: "说出对方可能的情绪——让他觉得被理解了", goodExample: "听起来你对这个方案的方向有些担心", badExample: "我理解你的不满", commonMistakes: ["标注太笼统", "标注变成了对自己的保护"], correctionRules: [{ pattern: "^.{0,10}$|我理解", hint: "标注要具体——不是'我理解你'，而是'你似乎担心项目会延期'。帮他命名他的情绪" }] },
      { name: "给选择", goal: "抛两个都可以接受的选择", goodExample: "我们可以现在一起改方案，也可以你晚上看完了明天早上我们碰——你选哪个？", badExample: "那你说怎么办", commonMistakes: ["只给一个选择（感觉像命令）", "丢回给对方"], correctionRules: [{ pattern: "你说|你觉得|你想怎么", hint: "不要丢回去。给他两个选择——两个都是你可以接受的。让对方觉得他在掌控" }] }
    ]
  };
})();
