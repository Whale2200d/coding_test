function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2
    return Array(num).fill().map((_, i) => i + a)
}