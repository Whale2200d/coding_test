function solution(arr, query) {
    return query.reduce((a, c, i) => {
        if (i % 2 === 0) return a.slice(0, c+1)
        return a.slice(c)
    }, [...arr])
}