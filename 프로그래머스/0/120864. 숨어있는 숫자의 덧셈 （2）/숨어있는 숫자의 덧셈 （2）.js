function solution(my_string) {
    let current = 0
    let sum = 0
    
    for (const s of my_string) {
        if (s>='0' &&  s<='9') {
            const num = (s.charCodeAt(0) - 48)
            current = current*10 + num
        } else {
            sum += current
            current = 0
        }
    }
    
    return sum+current
}