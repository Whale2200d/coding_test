function solution(board, k) {
    return board.reduce((a, c, i) => {
        let answer = 0
        for (let j=0; j<c.length; j++) if (i+j <= k) answer += c[j]
        return a+answer
    }, 0)
}