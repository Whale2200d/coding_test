function solution(balls, share) {
    let n = balls
    let k = share
    const nk = n-k
    
    k = Math.min(nk, k)
    
    let result = 1
    for (let i=1; i <=k; i++) {
        result = (result * (n-k+i)) / i
    }
    
    return result
}