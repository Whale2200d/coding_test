function solution(a, b, n) {
    let emptyCount = n
    let totalReceiveCount = 0
    
    while (emptyCount >= a) {
        const exchangeCount = Math.floor(emptyCount / a)
        const receiveCount = exchangeCount * b
        
        totalReceiveCount += receiveCount
        emptyCount = (emptyCount % a) + receiveCount
    }
    
    return totalReceiveCount
}