function solution(arr) {
    return arr.reduce((a, c, i) => {
        if (c >= 50 && c % 2 === 0) {
            a[i] = a[i] / 2
        } else if (c < 50 && c % 2 !== 0) {
            a[i] = a[i] * 2
        }
        return a
    }, [...arr])
}