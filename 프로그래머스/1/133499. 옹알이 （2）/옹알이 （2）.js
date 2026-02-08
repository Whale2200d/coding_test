function solution(babbling) {
    const pronoun = ["aya", "ye", "woo", "ma"]
    
    let count = 0
    
    for (const word of babbling) {
         let index = 0
         let previousToken = ""
         
         while (index < word.length) {
             let matchedToken = ""
             
             for (const token of pronoun) {
                 if (word.startsWith(token, index)) { matchedToken = token; break; }
             }
             
             if (matchedToken === '') break
             if (matchedToken === previousToken) break
             
             index += matchedToken.length
             previousToken = matchedToken
         }
        
        if (index === word.length) count++
    }
    
    return count
}