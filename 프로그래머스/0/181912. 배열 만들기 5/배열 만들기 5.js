function solution(intStrs, k, s, l) {
    const answer = [];
    
    for (const cur of intStrs) {
        const str = cur.slice(s, s+l)
        
        if (Number(str) > k) answer.push(Number(str));
    }
    
    return answer
}