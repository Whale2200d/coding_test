function solution(numLog) {
    let answer = ""
    
    for (let i = 0; i < numLog.length-1; i++) {
        const first = numLog[i]
        const second = numLog[i+1]
        const diff = second - first
        
        if (diff === 1) answer += "w"
        if (diff === -1) answer += "s"
        if (diff === 10) answer += "d"
        if (diff === -10) answer += "a"
    }
    
    return answer
}