function solution(picture, k) {
    return picture.reduce((a, c) => {
        const splited = c.split('')
        let answer = ""
        
        for (const str of splited) {
            answer += str.repeat(k)
        }
        
        for (let i=0; i<k; i++) {
            a.push(answer)    
        }
        
        return a
    }, [])
}