function solution(arr, queries) {
    return queries.reduce((acc, [s, e, k]) => {
        for (let i = s; i < e+1; i++) {
            if (i % k === 0) acc[i] += 1
        }
        return acc
    }, [...arr])
}