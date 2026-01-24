function solution(n) {
    return LCM(n, 6) / 6
}

const GCD = (a, b) => {
    while (b != 0) [a, b] = [b, a%b]
    return a
}

const LCM = (a, b) => (a * b) / GCD(a, b)