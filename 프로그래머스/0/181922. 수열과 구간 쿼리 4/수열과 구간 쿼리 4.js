function solution(arr, queries) {
    const result = [...arr]
    
    queries.map(([s, e, k]) => {
        for (let i = s; i < e+1; i++) {
            if (i % k === 0) result[i] += 1
        }
    })
    
    return result
}