function solution(age) {
    const changed = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
    return [...age.toString()].reduce((a, c) => a+changed[c], '')
}