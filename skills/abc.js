/**
 * TakeTwo Skill — ABC认知模型 (abc) · v1.0.0
 */
(function () {
  const D = window.SKILL_DEFS || (window.SKILL_DEFS = {});
  D["ABC认知模型"] = {
    id: "abc",
    category: "自我觉察",
    name: "ABC认知模型",
    source: "阿尔伯特·艾利斯《理性情绪行为疗法》",
    version: "1.0.0",
    description: "情绪反应过激时，停下来检查中间的自动化信念——改变信念(B)就能改变情绪(C)。适用：被当众质疑/批评、被阴阳怪气/暗讽、被夸/被表扬。不适用：事件信息不足无法检视信念、急需实操话术而非认知调整。",
    notFor: ["事件信息不足无法检视信念", "急需实操话术而非认知调整"],
    coreLogic: "事件(A) → 信念(B) → 情绪(C)；改变B就能改变C",
    sceneMatches: ["被当众质疑/批评", "被阴阳怪气/暗讽", "被夸/被表扬"],
    steps: [
      { name: "识别事件A", goal: "客观描述发生了什么", goodExample: "领导在会上问了我方案的事", badExample: "领导当众让我难堪", commonMistakes: ["混入评判", "描述太模糊"], correctionRules: [{ pattern: "让|使|害|害得", hint: "只说你看到听到了什么——像摄像头回放一样" }] },
      { name: "找出信念B", goal: "找到那个自动跳出来的想法", goodExample: "我当时的想法是'他肯定觉得我能力不行'", badExample: "我没想什么", commonMistakes: ["觉得没有信念", "信念太模糊"], correctionRules: [{ pattern: "^.{0,5}$|没想|不知道", hint: "一定有某个念头闪过的——'他觉得我不行'？'我肯定要丢脸了'？试试把那个闪念抓住" }] },
      { name: "检视信念", goal: "用理性评估这个信念是否合理", goodExample: "他问一句就说明我能力不行吗？不一定", badExample: "这就是事实", commonMistakes: ["拒绝检视", "用扭曲的方式'合理化'"], correctionRules: [{ pattern: "^.{0,10}$|就是|当然|肯定", hint: "试试用'不一定'开头——'他不一定觉得我不行'……还有什么其他可能性？" }] }
    ]
  };
})();
