function solution(cards1, cards2, goal) {
    let firstIndex = 0;
    let secondIndex = 0;
    
    for (const target of goal) {
        const firstWord = cards1[firstIndex]
        const secondWord = cards2[secondIndex]
        
        if (firstWord === target) { firstIndex++; continue }
        if (secondWord === target) { secondIndex++; continue }
        
        return "No"
    }
    
    return "Yes"
}