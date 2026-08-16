/**
 * TakeTwo Skill — 接受力训练 (acceptance) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["接受力训练"] = {
    id: "acceptance",
    category: "接受好意",
    name: "接受力训练",
    source: "沟通训练实战总结",
    version: "1.0.0",
    description: "被夸了只说'没有没有'、收到好意手足无措——练习从容接受。接受赞美/好意 = 对给予者的尊重 ≠ 炫耀。适用：被夸/被表扬、收到好意/机会、被表白/示好。不适用：被批评/被攻击时（不是接收好意的场景）。",
    notFor: ["被批评/被攻击（非接收好意场景）"],
    coreLogic: "接受赞美/好意 = 对给予者的尊重 ≠ 炫耀",
    sceneMatches: ["被夸/被表扬", "收到好意/机会", "被表白/示好"],
    steps: [
      { name: "停止否认", goal: "觉察到自己在下意识地推掉好意", goodExample: "我刚想说'没有没有'——然后停住了", badExample: "没有没有，我瞎弄的", commonMistakes: ["条件反射式否认", "用自贬回应赞美"], correctionRules: [{ pattern: "没有|不是|哪里|随便", hint: "你刚想推开它。停一下——深呼吸。别人的赞美是他眼里的事实。试试什么都不说，先吸一口气" }] },
      { name: "简单接收", goal: "用一个简单、真诚的方式接收", goodExample: "谢谢，我确实花了不少心思。", badExample: "还好吧，没那么夸张", commonMistakes: ["接收得太别扭", "又加了贬低自己的话"], correctionRules: [{ pattern: "但是|不过我|其实也", hint: "'谢谢'后面不要加'但是'。'谢谢你注意到'就够了——干净地收下" }] },
      { name: "连接对方", goal: "把接收变回人和人之间的连接", goodExample: "谢谢——你注意到了，我挺意外的。", badExample: "对，我这方面确实做得不错（自恋感太强）", commonMistakes: ["转向自我中心", "没有回到对方"], correctionRules: [{ pattern: "^.{0,5}谢谢$", hint: "可以再多一句——把目光转向对方：'谢谢你注意到'、'得到你的认可很重要'。接收后回到连接" }] }
    ]
  };
})();
