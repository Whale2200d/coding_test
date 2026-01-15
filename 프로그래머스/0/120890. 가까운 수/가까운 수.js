function solution(array, n) {
    let answer = []
    
    for (const v of array) {
        const distance = Math.abs(n-v)
        if (answer.length === 0 || distance === answer[0].close) {
            answer.push({ value: v, close: distance })
        } else if (distance < answer[0].close) {
            answer = []
            answer.push({ value: v, close: distance })
        }
    }
    
    return answer.sort((a, b) => a.value-b.value)[0].value
}