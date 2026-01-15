function solution(before, after) {
    // 각 문자와 빈도수가 동일한지 판별
    
    // 1. 문자 길이가 다르면 불가능
    if (before.length === after.length) {
        // 2. 각 문자의 출현 횟수 비교
        const freq = {}
        
        for (const ch of before) {
            freq[ch] = (freq[ch] ?? 0)+1
        }
        
        for (const ch of after) {
            if (!freq[ch]) return 0 // 없을 경우 불가능
            freq[ch] -= 1
        }
        
        return 1
    }
    return 0
}