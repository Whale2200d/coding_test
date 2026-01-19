function solution(numbers) {
    const [max, second] = numbers.sort((a, b) => b-a)
    return max*second
}