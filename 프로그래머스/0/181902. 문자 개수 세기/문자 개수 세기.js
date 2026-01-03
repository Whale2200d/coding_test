function solution(my_string) {
//     const answer = Array(52).fill(0)
    
//     for (const ch of my_string) {
//         const code = ch.charCodeAt(0)
        
//         if (code >= 65 && code <= 90) {
//             answer[code - 65]++
//         } else if (code >= 97 && code <= 122) {
//             answer[26+(code-97)]++
//         }
//     }
    
//     return answer
    
    return [...my_string].reduce((a, c) => (a[c.charCodeAt(0) - (c === c.toLowerCase() ? (97-26):65) ]++, a), Array(52).fill(0))
}