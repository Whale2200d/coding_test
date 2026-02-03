function solution(s) {
    return s.split(' ').map((word) => [...word].map((v, i) => i%2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('')).join(' ')
}