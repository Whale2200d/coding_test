function solution(n) {
    const answer = []
    let num = n
    
    for (let d=2; d*d<=num; d++) {
        if (num%d === 0) {
            answer.push(d)
            while (num % d === 0) num /= d // 완전히 제거
        }
    }
    
    if (num > 1) answer.push(num) // 남은 소수
    return answer
}