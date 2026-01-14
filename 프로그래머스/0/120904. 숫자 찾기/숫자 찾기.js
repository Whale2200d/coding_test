function solution(num, k) {
    const result = num.toString().indexOf(k.toString())
    
    return result === -1 ? -1 : result+1
}