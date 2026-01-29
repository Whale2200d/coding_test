function solution(n) {
    // 1. 가독성 기준 (중간 배열/문자열을 여러 번 만들어 메모리와 상수 비용이 큼)
    // return [...(n+"")].reverse().map((v) => +v)
    
    // 2. 효율성 기준 (숫자 연산만 하므로 메모리 효율이 더 좋고 보통 더 빠름)
    let num = n
    const answer = []
    
    do {
        answer.push(num%10)
        num = Math.floor(num/10)
    } while (num > 0);
        
    return answer
}