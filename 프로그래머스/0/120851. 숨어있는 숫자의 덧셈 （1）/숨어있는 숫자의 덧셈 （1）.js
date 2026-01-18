function solution(my_string) {
    let sum = 0
    
    for (const s of my_string) {
        if (s >= '0' && s <= '9') {
            sum += s.charCodeAt(0)-48
        }
    }
    
    return sum
}