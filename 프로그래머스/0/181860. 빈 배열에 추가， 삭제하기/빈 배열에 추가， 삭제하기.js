function solution(arr, flag) {
    return flag.reduce((a, c, i) => {
        if (c) {
            return [...a, ...new Array(arr[i]*2).fill(arr[i])]
        } else {
            return a.slice(0, -arr[i])
        }
    }, [])
}