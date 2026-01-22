function solution(n, k) {
    const drinkCount = k > Math.floor(n/10) ? k-Math.floor(n/10) : 0
    
    return drinkCount*2000 + n*12000
}