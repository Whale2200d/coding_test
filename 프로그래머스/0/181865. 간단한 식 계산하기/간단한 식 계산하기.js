function solution(binomial) {
    const [strA, op, strB] = binomial.split(" ")
    
    const a = Number(strA)
    const b = Number(strB)
    
    if (op === '+') return a+b
    if (op === '-') return a-b
    return a*b
}