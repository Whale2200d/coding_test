function solution(spell, dic) {
    // 길이가 같고, 사전 정렬 시 값이 동일할 경우 존재함.
    
    for (const word of dic) {
        if (word.length === spell.length) {
            const newWord = [...word].sort().join('')
            const newSpell = spell.sort().join('')
            
            if (newWord === newSpell) return 1
        }
    }
    return 2
}