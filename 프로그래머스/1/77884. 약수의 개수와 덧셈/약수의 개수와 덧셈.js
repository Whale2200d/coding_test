function solution(left, right) {
    let answer = 0
    
    for (let i=left; i<=right; i++) {
        const count = countAliqout(i)
        
        answer = count%2 === 0 ? answer+i : answer-i
    }
    
    return answer
}

function countAliqout(num) {
    const arr = []
    
    for (let i=1; i*i<=num; i++) {
        if (num%i === 0) {
            arr.push(i)
            if (i === num/i) {continue} else { arr.push(num/i) }
        }
    }
    
    return arr.length
}