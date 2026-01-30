function solution(numbers) {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return num.filter(v => !numbers.includes(v)).reduce((a, c) => a+c)
    
    
}