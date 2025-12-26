function solution(a, b) {
//     const firstAnswer = Number(a.toString() + b.toString())
//     const secondAnswer = Number(b.toString() + a.toString())
    
//     return firstAnswer >= secondAnswer ? firstAnswer : secondAnswer
    
    return Math.max(`${a}${b}`, `${b}${a}`)
}