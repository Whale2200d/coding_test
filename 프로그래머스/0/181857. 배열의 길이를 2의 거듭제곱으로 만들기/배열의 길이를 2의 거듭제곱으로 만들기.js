function solution(arr) {
    const answer = [...arr]
    let n = 0
    while (arr.length > 2**n) n++
    
    while (answer.length < 2**n) answer.push(0)
    return answer
}