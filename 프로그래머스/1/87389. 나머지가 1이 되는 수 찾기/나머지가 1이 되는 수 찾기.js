function solution(n) {
    const newN = n-1;
    let x = 2
    
    while (true) {
        if (newN % x === 0) return x
        x++
    }
}