function solution(arr1, arr2) {
    return arr1.map((a1, i) => a1.map((v, j) => v + arr2[i][j]))
}