function solution(a, b) {
    return a.reduce((acc, c, i) => acc+c*b[i], 0)
}