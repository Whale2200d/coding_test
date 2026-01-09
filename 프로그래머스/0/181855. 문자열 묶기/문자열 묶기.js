function solution(strArr) {
    const counts = []
    
    for (const str of strArr) {
        const length = str.length
        counts[length] = (counts[length] ?? 0) + 1
    }
    
    return Math.max(...counts.filter(v => !!v))
}