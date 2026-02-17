function solution(s){
    let balance = 0
    
    for (const blacket of s) {
        if (balance < 0) return false
        else if (blacket === "\(") balance++
        else if (blacket === "\)") balance--
    }
    
    return balance === 0
}