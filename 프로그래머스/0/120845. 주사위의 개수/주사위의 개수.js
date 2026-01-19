function solution(box, n) {
    const long = Math.floor(box[0] / n)
    const wide = Math.floor(box[1] / n)
    const high = Math.floor(box[2] / n)
    
    return long*wide*high
}