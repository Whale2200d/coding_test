function solution(numbers, direction) {
    const answer = [...numbers]
    
    if (direction === 'right') {
        const l = answer[answer.length-1]
        answer.unshift(l)
        answer.pop()
    } else {
        const f = answer[0]
        answer.push(f)
        answer.shift()
    }
    
    return answer
}