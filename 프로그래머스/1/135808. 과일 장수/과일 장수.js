function solution(k, m, score) {
    const sorted = score.sort((a, b) => b-a)
    const boxCount = Math.floor(sorted.length / m)
    let result = 0
    
    for (let i=0; i<boxCount*m; i += m) {
        const minPrice = Math.min(...sorted.slice(i, i+m))
        result += minPrice * m
    }
    
    return result
}