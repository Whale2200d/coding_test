function solution(arr, k) {
    const answer = []
    const seen = new Set()
    
    for (const x of arr) {
        if (!seen.has(x)) {
            seen.add(x);
            answer.push(x)
            if (answer.length === k) break;
        }
    }
    
    while (answer.length < k) answer.push(-1)
    
    return answer
}