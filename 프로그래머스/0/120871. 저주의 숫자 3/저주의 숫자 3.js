function solution(n) {
    let count = 0;
    let index = 0;
    
    while (index < n) {
        count++
        
        const isInclude = count.toString().includes('3')
        const isDivide = count % 3 === 0
        
        if (!isInclude && !isDivide) index++
    }
    
    return count
}