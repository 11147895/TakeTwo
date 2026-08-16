/**
 * TakeTwo Skill — 萨提亚沟通姿态 (satir) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["萨提亚沟通姿态"] = {
    id: "satir",
    category: "自我觉察",
    name: "萨提亚沟通姿态",
    source: "维吉尼亚·萨提亚《新家庭如何塑造人》",
    version: "1.0.0",
    description: "识别压力下的沟通姿态（讨好/指责/超理智/打岔/一致性）并回归一致性表达。适用：伴侣吵架/冷战、被道德绑架/过度干涉、说了伤人的话想补救。不适用：需要即时回怼话术的场合、情绪过载需先止损。",
    notFor: ["需要即时话术回应的场合", "情绪过载需先止损"],
    coreLogic: "识别五种沟通姿态 → 回归一致性沟通",
    sceneMatches: ["伴侣吵架/冷战", "被道德绑架/过度干涉", "说了伤人的话想补救"],
    steps: [
      { name: "觉察姿态", goal: "识别当下你在用什么姿态回应", goodExample: "我意识到自己在指责他", badExample: "是他先开始的", commonMistakes: ["无法觉察自己的姿态", "怪对方", "把注意力全放在对方身上"], correctionRules: [{ pattern: "他|你|对方", hint: "先不看对方。停下来，看看自己——你的身体感受？你在讨好、在指责、还是在回避？" }] },
      { name: "看见冰山", goal: "看到这个姿态下面的感受和渴望", goodExample: "我指责是因为我感到害怕——怕不被爱", badExample: "我就这样，改不了", commonMistakes: ["停在表层", "拒绝深入"], correctionRules: [{ pattern: "^.{0,10}$", hint: "指责下面藏着什么？可能是受伤、害怕、孤独——往下挖一层" }] },
      { name: "一致性表达", goal: "同时说感受和需求，不攻击不讨好", goodExample: "我很害怕你不在乎我了，但我又怕说出来", badExample: "你永远都是这样", commonMistakes: ["又回到旧姿态"], correctionRules: [{ pattern: "你总是|你永远|你就是", hint: "回来了——你又在指责了。试试从'我'开始：我感到……我需要……" }] }
    ]
  };
})();
