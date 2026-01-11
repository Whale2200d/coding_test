function solution(a, b) {
    const isOdd = (x) => x%2 !== 0
    
    if (isOdd(a) && isOdd(b)) return a**2+b**2
    else if (!isOdd(a) && !isOdd(b)) return Math.abs(a-b)
    return (a+b)*2
}