function solution(my_string, queries) {
    return queries.reduce((str, [s, e]) => {
        const mid = str.slice(s, e+1).split('').reverse().join('')
        return str.slice(0, s) + mid + str.slice(e+1);
    }, my_string)
}