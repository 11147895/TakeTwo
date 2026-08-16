/**
 * TakeTwo Skill — 冒名顶替综合征应对 (impostorSyndrome) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["冒名顶替综合征应对"] = {
    id: "impostorSyndrome",
    category: "接受好意",
    name: "冒名顶替综合征应对",
    source: "宝琳·R·克兰斯《冒名顶替现象》",
    version: "1.0.0",
    description: "总觉得成功是运气好、随时怕被揭穿'真面目'——识别冒充心态、收集客观证据、重建自我认知。适用：被夸/被表扬、收到好意/机会、被表白/示好时总自我怀疑。不适用：客观能力确实欠缺需补技能（不是心态问题）。",
    notFor: ["客观能力确实欠缺需补技能"],
    coreLogic: "识别冒充心态 → 收集客观证据 → 重新整合自我认知",
    sceneMatches: ["被夸/被表扬", "收到好意/机会", "被表白/示好"],
    steps: [
      { name: "识别声音", goal: "听到心里那个说'你不配'的声音", goodExample: "我听到了——我心里有个声音在说'他们夸错了，你根本不配'", badExample: "这次确实是运气好", commonMistakes: ["直接认同那个声音", "没意识到这是模式"], correctionRules: [{ pattern: "运气|侥幸|别人都|其实很", hint: "这是那个'冒名顶替'的声音在说话。你不是运气好——你就是有这个能力，只是你不太相信" }] },
      { name: "收集证据", goal: "找客观证据证明你的能力", goodExample: "我确实在这项目里花了三个月——每个数据都是我自己做的", badExample: "我只是做了分内事", commonMistakes: ["低估自己的贡献", "无法客观看自己"], correctionRules: [{ pattern: "分内|应该的|大家都有", hint: "不是'分内事'。你把你的贡献列出来——做你分内事的同事那么多，为什么他们在夸你？" }] },
      { name: "接纳自我定位", goal: "整合一个更准确的自我画像", goodExample: "我不是全能天才——但我也不是骗子。我是有这个能力的人", badExample: "好吧我确实做得还行", commonMistakes: ["要么全盘否定夸赞，要么突然膨胀"], correctionRules: [{ pattern: "^.{0,8}$|还行|一般|还可以", hint: "这不是谦虚。试试一句话：'我在这方面确实有能力，同时我还有很多要学。'——两个同时成立" }] }
    ]
  };
})();
