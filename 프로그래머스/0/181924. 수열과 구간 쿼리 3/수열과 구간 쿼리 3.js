function solution(arr, queries) {
    let answer = [...arr]
    
    for (const query of queries) {
        const i = query[0]
        const j = query[1]
        
        const temp = answer[i]
        answer[i] = answer[j]
        answer[j] = temp
    }
    
    return answer
}