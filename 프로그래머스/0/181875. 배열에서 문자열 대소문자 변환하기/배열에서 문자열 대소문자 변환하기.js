function solution(strArr) {
    return strArr.map((v, i) => {
        return i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
    })
}