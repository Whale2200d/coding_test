function solution(picture, k) {
    return picture.reduce((acc, cur) => {
        const newStr = [...cur].reduce((a, c) => a+c.repeat(k), "")
                
        for (let i=0; i<k; i++) acc.push(newStr)
        
        return acc
    }, [])
}