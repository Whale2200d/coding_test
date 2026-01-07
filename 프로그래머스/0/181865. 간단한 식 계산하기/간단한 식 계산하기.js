function solution(binomial) {
    const [strA, op, strB] = binomial.split(" ")
    
    const a = +strA
    const b = +strB
    
    if (op === '+') return a+b
    if (op === '-') return a-b
    return a*b
}