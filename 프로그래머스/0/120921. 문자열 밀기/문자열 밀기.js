function solution(A, B) {
    if (A === B) return 0
    
    const spread = [...A]
    let count = 1
    
    while(count < spread.length) {
        const last = spread.pop()
        spread.unshift(last)
        
        if (spread.join('') === B) return count
        
        count++
    }
    
    return -1
}