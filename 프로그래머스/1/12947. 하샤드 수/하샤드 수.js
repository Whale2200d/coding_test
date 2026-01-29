function solution(x) {
    const sum = [...x.toString()].reduce((a, c) => a+(+c), 0)
    return Boolean(x%sum===0)
}