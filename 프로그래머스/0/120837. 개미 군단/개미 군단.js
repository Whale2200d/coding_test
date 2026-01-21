function solution(hp) {
    let count = 0
    let _hp = hp
    
    count += Math.floor(_hp/5)
    _hp %= 5
    
    count += Math.floor(_hp/3)
    _hp %= 3
    
    count += _hp
    
    return count
}