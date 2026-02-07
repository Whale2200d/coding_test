function solution(n, m, section) {
    let result = 0
    let paintedUntil = 0
    
    for (const position of section) {
        if (position > paintedUntil) {
            result++
            paintedUntil = position + m - 1
        }
    }
    
    return result
}