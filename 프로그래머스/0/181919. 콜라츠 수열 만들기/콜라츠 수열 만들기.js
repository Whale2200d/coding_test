function solution(n) {
    let result = n;
    let arr = [n];
    
    while(result !== 1) {
        const even = result/2
        const odd = result*3+1
        if (result % 2 === 0) {
            arr.push(even)
            result = even
        } else {
            arr.push(odd)
            result = odd
        }
    }
    
    return arr;
}