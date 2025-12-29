function solution(arr, queries) {
    let answer = []
    
    for (let i = 0; i < queries.length; i++) {
        const [s, e, k] = queries[i]
        
        const min = [...arr].slice(s, e+1).reduce((best, v) => {
            if (v > k && (best === null || v < best)) return v
            return best
        }, null)
        
        answer.push(min === null ? -1 : min)
    }
    
    return answer
}