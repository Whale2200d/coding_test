function solution(n) {
    // 1. 가독성 기준 (O(N*N))
    // return [...(n+"")].reverse().map((v) => +v)
    
    // 2. 효율성 기준 (O(N))
    let num = n
    const answer = []
    
    do {
        answer.push(num%10)
        num = Math.floor(num/10)
    } while (num > 0);
        
    return answer
}