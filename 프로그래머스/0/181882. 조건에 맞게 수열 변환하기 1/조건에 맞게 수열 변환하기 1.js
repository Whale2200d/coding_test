function solution(arr) {
    return arr.map((v, i) => {
        if (v >= 50 && v % 2 === 0) return v/2
        if (v < 50 && v % 2 !== 0) return v*2
        return v
    })
}