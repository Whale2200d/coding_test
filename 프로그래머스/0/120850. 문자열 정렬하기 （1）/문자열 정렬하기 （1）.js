function solution(my_string) {
    return [...my_string].filter(v => v >= '0' && v <= '9').map(v => Number(v)).sort()
}