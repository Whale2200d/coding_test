function solution(t, p) {
    const arr = [...t]
    let count = 0
    
    for (let i=0; i<arr.length-p.length+1; i++) {
        const num = arr.slice(i, i+p.length).join('')
        if (+num <= +p) count++
    }
    
    return count
}