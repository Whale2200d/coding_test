function solution(d, budget) {
    const sorted = [...d].sort((a, b) => a-b)
    let remainBudget = budget
    let count = 0
    
    for (const amount of sorted) {
        if (remainBudget < amount) break;
        remainBudget -= sorted[count]
        count++
    }
    
    return count
}