function solution(array, commands) {
    return [...commands].reduce((a, [i, j, k]) => [...a, array.slice(i-1, j).sort((a, b) => a-b)[k-1]], [])
}