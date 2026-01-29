function solution(n) {
    let x = 1
    
    while(x*x <= n) {
        if (x*x === n) return (x+1)**2
        else x++
    }
    
    return -1
}