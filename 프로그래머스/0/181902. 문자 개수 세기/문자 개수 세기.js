function solution(my_string) {
    const answer = []
    
    for (let code=65; code <= 90; code++) {
        const charCode = String.fromCharCode(code)
        const count = [...my_string].reduce((a, c) => c === charCode ? a+1 : a, 0)
        
        answer.push(count)
    }
    
    for (let code=97; code <= 122; code++) {
        const charCode = String.fromCharCode(code)
        const count = [...my_string].reduce((a, c) => c === charCode ? a+1 : a, 0)
        
        answer.push(count)
    }
    
    return answer
}