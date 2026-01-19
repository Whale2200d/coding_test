function solution(n) {
    let i = 1
    let factorial = 1
    
    while(true) {
        factorial *= i
        if (factorial > n) return i-1
        else i++
    }
}