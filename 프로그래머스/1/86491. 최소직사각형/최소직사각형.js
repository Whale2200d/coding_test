function solution(sizes) {
    const sorted = [...sizes].map((arr) => arr.sort((a, b) => a-b))
    const maxWidth = Math.max(...sorted.map((arr) => arr[0]))
    const maxHeight = Math.max(...sorted.map((arr) => arr[1]))
    
    return maxWidth * maxHeight
}