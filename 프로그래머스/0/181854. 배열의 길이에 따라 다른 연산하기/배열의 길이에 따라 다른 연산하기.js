function solution(arr, n) {
    return arr.reduce((a, _, i) => {
        if (arr.length%2 !== 0 && i%2 === 0) a[i] += n
        if (arr.length%2 === 0 && i%2 !== 0) a[i] += n
        return a
    }, [...arr])
}