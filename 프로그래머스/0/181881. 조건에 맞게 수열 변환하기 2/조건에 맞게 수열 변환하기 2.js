function solution(arr, n=0) {
    const newArr = arr.map((v, i) => {
        if (v >= 50 && v % 2 === 0) return v/2
        if (v < 50 && v % 2 !== 0) return v*2+1
        return v
    })
    
    if (arr.every((v, i) => Object.is(v, newArr[i]))) return n
    
    return solution(newArr, n+1)
}