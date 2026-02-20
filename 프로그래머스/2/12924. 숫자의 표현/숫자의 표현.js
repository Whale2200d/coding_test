function solution(n) {
    let count = 0
    
    for (let d=1; d <= n; d++) {
        if (n%d === 0 && d%2 !== 0) count++
    }
    
    return count
}
