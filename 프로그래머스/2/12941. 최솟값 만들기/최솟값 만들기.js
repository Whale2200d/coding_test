function solution(A,B){
    // 결과가 최소값이므로, 큰 수끼리 곱하면 손해
    // 결과가 최소값이므로, 가장 큰 수는 가장 작은 수와 곱해야 함
    const sortedA = A.sort((a, b) => a-b)
    const sortedB = B.sort((a, b) => b-a)
    return sortedA.reduce((a, c, i) => a+(c*sortedB[i]), 0)
}