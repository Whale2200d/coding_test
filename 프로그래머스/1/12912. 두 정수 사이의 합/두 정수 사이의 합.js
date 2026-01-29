function solution(a, b) {
    if (a === b) return a
    
    const low = (a>b) ? b : a
    const high = (a>b) ? a : b
    let answer = 0
    
    for (let i=low; i<=high; i++) {
        answer += i
    }
    
    return answer
}