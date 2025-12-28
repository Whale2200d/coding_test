function solution(a, d, included) {
    let answer = 0;
    let current = a;
    
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += current
        }
        current += d
    }
    
    return answer;
}