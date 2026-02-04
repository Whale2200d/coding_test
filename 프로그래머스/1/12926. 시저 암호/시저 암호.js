function solution(s, n) {
    if (s === '') return ''
    
    const shift = n % 26
    let result = ''
    
    for (const char of s) {
        const codeUnit = char.charCodeAt(0)
        
        // 공백
        if (char === ' ') { result += ' '; continue; }
        
        // 대문자
        if (codeUnit >= 65 && codeUnit <= 90) {
            const baseCodeUnit = 65 // A
            const moveCodeUnit = ((codeUnit - baseCodeUnit + shift) % 26) + baseCodeUnit
            result += String.fromCharCode(moveCodeUnit)
            continue
        }
        
        // 소문자
        if (codeUnit >= 97 && codeUnit <= 122) {
            const baseCodeUnit = 97 // a
            const moveCodeUnit = ((codeUnit - baseCodeUnit + shift) % 26) + baseCodeUnit
            result += String.fromCharCode(moveCodeUnit)
            continue
        }
    }
    
    return result
}