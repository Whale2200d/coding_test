function solution(n) {
    let count = 0;
    let current = n;
    
    while(current >= 1) {
        count += current % 10;
        
        current = Math.floor(current / 10)
    }
    
    return count
}