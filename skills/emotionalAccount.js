/**
 * TakeTwo Skill — 情感账户 (emotionalAccount) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["情感账户"] = {
    id: "emotionalAccount",
    category: "亲密关系",
    name: "情感账户",
    source: "史蒂芬·柯维延伸",
    version: "1.0.0",
    description: "用'存款/取款'的视角管理关系中的情感积累，好感是存款、冲突是取款。适用：翻旧账争吵、冷战不说话、说了伤人的话想补救。不适用：关系已彻底破裂、需要即时补救话术时。",
    notFor: ["关系已彻底破裂", "需要即时补救话术"],
    coreLogic: "好感是存款，冲突是取款 → 保持账户余额",
    sceneMatches: ["翻旧账争吵", "冷战不说话", "说了伤人的话想补救"],
    steps: [
      { name: "识账", goal: "看当下账户余额是多少", goodExample: "这段时间我忙着加班，我们很久没有一起好好说话了——账户可能快空了", badExample: "不就吵了一次架吗", commonMistakes: ["只看这一次冲突忽略长期消耗", "高估余额"], correctionRules: [{ pattern: "一次|就这一|才一次", hint: "每次冲突都在提款。如果账户本来就不多，一次冲突就可以清空。看看最近你们有多少'存款'？" }] },
      { name: "存款", goal: "主动做一些对方会在意的好事", goodExample: "我知道你最近压力也大——今天我来做饭", badExample: "对不起我下次注意", commonMistakes: ["用道歉代替存款", "只说不做"], correctionRules: [{ pattern: "对不起|抱歉|下次|以后", hint: "道歉是还债，不是存款。存款是额外的——一件对方真正在意的事，不要求即刻回报" }] }
    ]
  };
})();
