function solution(n) {
    return n % 2 === 0 ? n * (n/2+1) * (n+1) / 3 : (n+1) * (n+1) / 4
}