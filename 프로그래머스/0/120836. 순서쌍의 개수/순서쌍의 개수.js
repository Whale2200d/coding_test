function solution(n) {
    let count = 0;
    let d=1
    
    while(d**2 <= n) {
        if (n%d === 0) { count++ }
        d++
    }
    
    return (d-1)**2 === n ? count*2-1 : count*2
}