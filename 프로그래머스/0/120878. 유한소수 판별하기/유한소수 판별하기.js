function solution(a, b) {
    let den = b
    while (den%2 === 0) den /= 2
    while (den%5 === 0) den /= 5
    if (a % den === 0) den=1
    return den === 1 ? 1 : 2
}