function solution(myString, pat) {
    return [...myString].reduce((a, c, i) => {
        return myString.slice(i, i+pat.length) === pat ? a+1 : a
    }, 0)
}