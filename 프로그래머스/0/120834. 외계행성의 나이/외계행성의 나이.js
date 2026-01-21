function solution(age) {
    const changed = 'abcdefghij'
    return [...age.toString()].reduce((a, c) => a+changed[c], '')
}