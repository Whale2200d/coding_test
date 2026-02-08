function solution(n) {
    let count = 0
    
    // 4부터 n까지 돌면서
    for (let i=2; i<=n; i++) {
        // 소수읹디 판별
        if (isPrime(i)) count++
    }
    
    return count
}

function isPrime(num) {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    
    const limit = Math.floor(Math.sqrt(num))
    for (let d=3; d <= limit; d += 2) {
        if (num % d === 0) return false
    }
    return true
}