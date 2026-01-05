function solution(arr, intervals) {
    const answer = []
    
    const [[a1, b1], [a2, b2]] = intervals
    
    for (let i = a1; i <= b1; i++) {
        answer.push(arr[i])
    }
    
    for (let j = a2; j <= b2; j++) {
        answer.push(arr[j])
    }
    
    return answer
}