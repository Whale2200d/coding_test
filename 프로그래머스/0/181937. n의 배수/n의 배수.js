function solution(num, n) {
    // return num % n === 0 ? 1 : 0
    
    // 결과가 0일 때, true가 되어야 하므로, NOT 연산자 활용
    return +!(num % n)
}