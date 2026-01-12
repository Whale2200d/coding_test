function solution(arr) {
    const r = arr.length
    const c = arr[0].length
    if (r === c) return arr
    
    let max = 0
    const answer = [...arr]
    
    if (r > c) {
        max = r
        for (let i=0; i<max; i++) answer[i] = [...answer[i], ...Array(max-c).fill(0)]
    } else {
        max = c
        for (let i=0; i<max-r; i++) answer.push([...Array(max).fill(0)])
    }
    
    return answer
}