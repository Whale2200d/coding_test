function solution(numbers) {
    const [a1, a2] = numbers.sort((a, b) => a-b)
    const [b1, b2] = numbers.sort((a, b) => b-a)
    
    return a1*a2 > b1*b2 ? a1*a2 : b1*b2
}