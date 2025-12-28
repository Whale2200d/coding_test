function solution(a, b, c) {
    const firstPower = a + b + c
    const secondPowers = a**2 + b**2 + c**2
    const thirdPowers = a**3 + b**3 + c**3
    
    if (a === b && b === c) return firstPower * secondPowers * thirdPowers
    if (a === b || b === c || a === c) return firstPower * secondPowers
    return firstPower
}