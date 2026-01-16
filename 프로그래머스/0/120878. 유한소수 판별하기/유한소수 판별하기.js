function solution(a, b) {
    let den = b / gcd(a, b) // 기약분수로 나타낸 분모
    
    while (den % 2 === 0) den /= 2
    while (den % 5 === 0) den /= 5
    
    return den === 1 ? 1 : 2
}

function gcd(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)
    
    while (b != 0) {
        const r = a % b
        a = b
        b = r
    }
    
    return a
}