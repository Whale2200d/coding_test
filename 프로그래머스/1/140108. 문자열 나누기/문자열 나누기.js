function solution(s) {
    let splitCount = 0
    
    let referenceChar = ''
    let sameCount = 0
    let diffCount = 0
    
    for (const char of s) {
        // 새로운 구간 시작
        if (referenceChar === '') {
            referenceChar = char
            sameCount = 0
            diffCount = 0
        }
        
        if (char === referenceChar) sameCount++
        else diffCount++
        
        // 최초로 같아지는 시점에 분리
        if (sameCount === diffCount) {
            splitCount++
            referenceChar = '' // 다음 글자에서 새 구간 시작
        }
    }
    
    // 끝까지 갔는데 구간이 남아있으면 마지막 1개 추가
    if (referenceChar !== '') splitCount++
    return splitCount
}