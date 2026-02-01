function solution(s) {
    if (!(s.length === 4 || s.length === 6)) return false
    
    for (const v of s) {
        if (Number.isNaN(Number(v))) return false
    }
    
    return true
}