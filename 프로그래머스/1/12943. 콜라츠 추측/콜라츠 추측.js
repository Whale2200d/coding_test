function solution(num) {
    if (num === 1) return 0
    
    let count = 0
    let result = num
    
    while(count < 500 && result !== 1) {
        result = result%2 === 0 ? result / 2 : result*3 + 1
        count++
    }
    
    return result === 1 ? count : -1
}