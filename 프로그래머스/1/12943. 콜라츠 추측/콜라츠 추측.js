function solution(num) {
    if (num === 1) return 0
    
    let count = 0
    let result = num
    
    while(count <= 500) {
        count++

        if (result%2 === 0) result /= 2
        else result = result*3 + 1
        
        if (result === 1) break
    }
    
    return result === 1 ? count : -1
}