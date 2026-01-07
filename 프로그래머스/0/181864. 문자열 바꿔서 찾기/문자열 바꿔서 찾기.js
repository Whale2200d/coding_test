function solution(myString, pat) {
    return +[...myString].map((v) => v === 'A' ? 'B' : 'A').join('').includes(pat)
}