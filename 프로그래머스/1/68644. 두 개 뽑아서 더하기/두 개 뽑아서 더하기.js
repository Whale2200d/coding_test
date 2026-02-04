function solution(numbers) {
    // 일반 방법
    const sumSet = new Set()
    
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            const sum = numbers[i] + numbers[j]
            sumSet.add(sum)
        }
    }
    
    return [...sumSet].sort((a, b) => a-b)
    
    // 조합(combination) 방법
}