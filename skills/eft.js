/**
 * TakeTwo Skill — 情绪焦点疗法EFT (eft) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["情绪焦点疗法"] = {
    id: "eft",
    category: "自我觉察",
    name: "情绪焦点疗法",
    source: "苏珊·约翰逊《依恋与亲密关系》",
    version: "1.0.0",
    description: "在亲密关系中从愤怒/回避背后找到真正的情感需求，表达脆弱。适用：伴侣吵架/冷战、被说'你根本不在乎我'、说了伤人的话想补救。不适用：对方不在场无法展开对话、冲突极激烈需先接情绪。",
    notFor: ["对方不在场/无法对话", "冲突极激烈需先接情绪"],
    coreLogic: "识别表面情绪 → 触及深层情绪 → 表达脆弱",
    sceneMatches: ["伴侣吵架/冷战", "被说'你根本不在乎我'", "说了伤人的话想补救"],
    steps: [
      { name: "识别表面情绪", goal: "说出你正在表达的表层情绪", goodExample: "我在发火，一直在指责他", badExample: "没什么，我没事", commonMistakes: ["否认情绪", "只看到对方的问题"], correctionRules: [{ pattern: "^.{0,5}$|没什么|没事|算了", hint: "你心里一定有什么在涌动——即使不太想承认。先看看那一层" }] },
      { name: "触及深层情绪", goal: "找到表面情绪下面藏着什么", goodExample: "我发火是因为害怕失去他", badExample: "我就是生气", commonMistakes: ["停在表层", "不知如何区分"], correctionRules: [{ pattern: "^.{0,8}$|生气|愤怒|烦躁", hint: "愤怒是保护层。它下面通常藏着更脆弱的东西——害怕？受伤？孤独？你试试往深走一步" }] },
      { name: "脆弱性表达", goal: "用不攻击的方式说出你的脆弱", goodExample: "我很害怕你不在乎我了——这种害怕让我生气", badExample: "你必须理解我", commonMistakes: ["又回到指责或回避", "太抽象"], correctionRules: [{ pattern: "你|必须|应该", hint: "脆弱需要从自己出发。试试'我感到……因为……'——重点是你，不是他" }] }
    ]
  };
})();
