function solution(a, b) {
    // 1. 반복문 사용
//     if (a === b) return a
    
//     const low = a > b ? b : a
//     const high = a > b ? a : b
//     let answer = 0
    
//     for (let i=low; i<=high; i++) {
//         answer += i
//     }
    
//     return answer
    
    
    // 반복문 없이, 등차수열의 합 공식(가우스 공식)
//     const low = a > b ? b : a
//     const high = a > b ? a : b
    
//     const sumLow = low * (1+low) / 2
//     const sumHigh = high * (1+high) / 2
    
//     return sumHigh - sumLow + low
    return (a+b) * (Math.abs(a-b) + 1) / 2
}