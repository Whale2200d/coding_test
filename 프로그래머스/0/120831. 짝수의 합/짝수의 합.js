function solution(num) {
    const n = num%2 === 0 ? num/2 : (num-1)/2
    return n*(n+1)
}