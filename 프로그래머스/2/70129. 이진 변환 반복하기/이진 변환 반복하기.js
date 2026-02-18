function solution(s) {
    let count = 0
    let removedZeroCount = 0
    
    while (s !== '1') {
        const originalLength = s.length
        const filteredString = s.replaceAll('0', '')
        s = filteredString.length.toString(2)
        removedZeroCount += originalLength - filteredString.length
        count++
    }
    
    return [count, removedZeroCount]
}