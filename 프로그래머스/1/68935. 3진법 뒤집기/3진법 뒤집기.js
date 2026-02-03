function solution(n) {
    const reversed = [...String(n.toString(3))].reverse().join('')
    return parseInt(reversed, 3)
}