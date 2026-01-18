function solution(s) {
    const list = s.split(' ')
    
    return [...list].reduce((a, c, i) => c === 'Z' ? a-Number(list[i-1]) : a+Number(c), 0)
}