/**
 * TakeTwo Skill — 戈特曼情绪急救 (gottmanEmergency) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["戈特曼情绪急救"] = {
    id: "gottmanEmergency",
    category: "亲密关系",
    name: "戈特曼情绪急救",
    source: "约翰·戈特曼《幸福的婚姻》",
    version: "1.0.0",
    description: "在伴侣情绪激烈时不急着解决问题，先接住人：先接住情绪→等降温→再说事情。适用：伴侣吵架/冷战、翻旧账争吵、被说'你根本不在乎我'。不适用：自己的情绪先崩（需先自我情绪急救）、对方不在场无法对话。",
    notFor: ["自己情绪先崩需先自我急救", "对方不在场无法对话"],
    coreLogic: "先接住对方情绪 → 等情绪降温 → 再说事情",
    sceneMatches: ["伴侣吵架/冷战", "翻旧账争吵", "被说'你根本不在乎我'"],
    steps: [
      { name: "停止进阶", goal: "意识到对方的情绪已经过了理性阈值", goodExample: "他现在说这些话不是针对我——是他的情绪在说话", badExample: "你冷静一下", commonMistakes: ["叫对方冷静（这往往火上浇油）", "急着解释或反驳"], correctionRules: [{ pattern: "冷静|别激动|别生气", hint: "不要说'冷静一下'——那是最快引爆的词之一。先接住：'我听到了，这件事让你很难过'" }] },
      { name: "接住情绪", goal: "承认对方情绪的存在，不评价对错", goodExample: "我听到了——这件事让你很难过，你觉得我不理解你", badExample: "好吧是我错了行了吧", commonMistakes: ["假接住→真敷衍", "用认错来跳过这步"], correctionRules: [{ pattern: "好吧|是我|行了吧|你说的对", hint: "不是要你认错——是要你接住他的感受。'我听到了，你很生气/难受/失望'是你的观察，不是你的认错" }] },
      { name: "情绪降温后沟通", goal: "等风暴过去再谈事情", goodExample: "我们现在先休息一下好不好？半小时后你愿意的话我们再聊", badExample: "你说的对，我当时不该……（直接跳到解释/道歉）", commonMistakes: ["还在情绪里就尝试理性沟通", "没有给对方缓冲时间"], correctionRules: [{ pattern: "但是|其实|我那时候", hint: "先不要——现在对方还没下来。给个时间锚：'等一会我们再说，不急'" }] }
    ]
  };
})();
