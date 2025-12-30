function solution(l, r) {
    let answer = [];
    
    for (let i = l; i <= r; i++) {
        const strArr = i.toString().split('')
        
        if (!(strArr.includes("1") || strArr.includes("2") || strArr.includes("3") || strArr.includes("4") || strArr.includes("6") || strArr.includes("7") || strArr.includes("8") || strArr.includes("9"))) answer.push(i)
    }
    
    return answer.length === 0 ? [-1] : answer
}