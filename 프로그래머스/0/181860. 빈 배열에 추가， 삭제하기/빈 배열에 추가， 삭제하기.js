function solution(arr, flag) {
    return flag.reduce((a, c, i) => {
        if (c) {
            return [...a, ...new Array(arr[i]*2).fill(arr[i])]
        } else {
            for (let j=0; j<arr[i]; j++) {a.pop()}
            return a
        }
    }, [])
}