function solution(n, m) {
    const gcd = GCD(n, m)
    
    return [gcd, (n*m) / gcd]
}

const GCD = (a, b) => {
    while (b !== 0) [a, b] = [b, a%b]
    return a
}