function solution(survey, choices) {
  const scoreByType = new Map() // 성격유형별 점수
  const indicatorPairs = ["RT", "CF", "JM", "AN"]

  for (const pair of indicatorPairs) {
    scoreByType.set(pair[0], 0)
    scoreByType.set(pair[1], 0)
  }

  for (let questionIndex = 0; questionIndex < survey.length; questionIndex++) {
    const [disagreeType, agreeType] = survey[questionIndex]
    const choice = choices[questionIndex]

    const distanceFromNeutral = Math.abs(choice - 4)
    if (distanceFromNeutral === 0) continue

    const earnedType = choice < 4 ? disagreeType : agreeType
    scoreByType.set(earnedType, scoreByType.get(earnedType) + distanceFromNeutral)
  }

  let result = "";
  for (const pair of indicatorPairs) {
    const leftType = pair[0]
    const rightType = pair[1]

    const leftScore = scoreByType.get(leftType)
    const rightScore = scoreByType.get(rightType)

    result += leftScore >= rightScore ? leftType : rightType
  }

  return result
}
