function solution(survey, choices) {
    // survey: 질문마다 판단하는 지표를 담은 문자열 배열
    // choices: 검사자가 각 질문마다 선택한 선택지를 담은 정수 배열
    // const standard = ["RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"]
    
    /**
    1. "AN"에는 5점 -> 약간 동의 -> 네오형에 1점
    2. "CF"에는 3점 -> 약간 비동의 -> 콘형에 1점
    3. "MJ"에는 2점 -> 비동의 -> 무지형에 2점
    */
    // 1. 점수 집계
    let score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }

    for (let i=0; i<survey.length; i++) {
        const currSurvey = survey[i]
        const currChoice = choices[i]
        
        if (currChoice === 4) continue;
        
        // 4보다 크면 오른쪽, 4보다 작으면 왼쪽 값에 점수 부여
        const index = currChoice > 4 ? 1 : 0
        score[currSurvey[index]] += Math.abs(currChoice - 4)
    }
    
    // 2. 지표 내 비교
    let typePairs = [ ['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N'] ]
    let result = ''
    
    for (const [leftType, rightType] of typePairs) {
        result += score[leftType] >= score[rightType] ? leftType : rightType
    }
    
    return result
}
