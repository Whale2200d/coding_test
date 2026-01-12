function solution(myString) {
    const ascii = 'l'.charCodeAt(0)
    
    return [...myString].reduce((a, c) => {
        const cur = c.charCodeAt(0)
        
        return cur < ascii ? a+'l' : a+c
    }, "")
}