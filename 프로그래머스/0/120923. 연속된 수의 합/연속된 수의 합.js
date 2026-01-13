function solution(num, total) {
    const answer = Array.from({ length: num }, (_, i) => i+1)
    
    while(true) {
        const fv = answer[0]
        const lv = answer[answer.length-1]
        const reduced = answer.reduce((a, c) => a+c)
        
        if (reduced > total) { answer.unshift(fv-1); answer.pop(); }
        else if (reduced < total) { answer.push(lv+1); answer.shift(); }
        else return answer
    }
}