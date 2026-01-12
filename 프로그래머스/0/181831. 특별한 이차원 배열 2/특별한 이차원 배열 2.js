function solution(arr) {
    return +arr.every((a, i) => a.every((_, j) => arr[i][j] === arr[j][i]))
}