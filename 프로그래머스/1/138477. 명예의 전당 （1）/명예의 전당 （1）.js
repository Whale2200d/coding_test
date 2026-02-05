function solution(k, score) {
    const answer = []
    
    for (let i=0; i<score.length; i++) {
        const sliced = score.slice(0, i+1).sort((a,b) => b-a)
        answer.push(i <= k-1 ? Math.min(...sliced) : sliced[k-1])
    }
    
    return answer
}