function solution(n) {
    let result = n;
    let arr = [n];
    
    while(result !== 1) {
        const even = result/2
        const odd = result*3+1
        
        result % 2 === 0 ? arr.push(even) : arr.push(odd)
        result = result % 2 === 0 ? even : odd
    }
    
    return arr;
}