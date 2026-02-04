function solution(s) {
    const lastIndexMap = new Map()
    const answer = []
    
    for (let i=0; i<s.length; i++) {
        const currentValue = s[i]
        const previousIndex = lastIndexMap.get(currentValue)
        
        answer.push(previousIndex === undefined ? -1 : i-previousIndex)
        lastIndexMap.set(currentValue, i)
    }
    
    return answer
}