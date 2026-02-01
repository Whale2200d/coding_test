function solution(price, money, count) {
    let result = 0
    
    // 1. loop from 1 to "count"
    // 2. add "result" price x 1 ~ price x count
    for (let i=1; i<=count; i++) { result += price*i }
    
    return result > money ? result - money : 0
}
