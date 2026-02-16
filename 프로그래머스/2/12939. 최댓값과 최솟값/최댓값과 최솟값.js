function solution(s) {
    const splited = s.split(' ').map(Number)
    return `${Math.min(...splited)} ${Math.max(...splited)}`
}