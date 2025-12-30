function solution(number) {
    const result = number.split("").reduce((a, c) => a + Number(c), 0)
    
    return result % 9
}