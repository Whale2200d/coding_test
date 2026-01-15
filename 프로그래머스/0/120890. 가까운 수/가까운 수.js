function solution(array, n) {
    const answer = {
        value: 0,
        close: 99
    }
    
    for (const v of array) {
        const distance = Math.abs(n-v)
        if (distance < answer.close || (distance === answer.close && answer.value > v)) {
            answer.value = v
            answer.close = distance
        }
    }
    
    return answer.value
}