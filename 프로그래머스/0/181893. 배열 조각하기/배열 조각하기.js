// function solution(arr, query) {
//     return query.reduce((a, c, i) => {
//         if (i % 2 === 0) return a.slice(0, c+1)
//         return a.slice(c)
//     }, [...arr])
// }

function solution(arr, query, n=0) {
    const isEven = !(n % 2)
    const newArr = isEven ? arr.slice(0, query[n] + 1) : arr.slice(query[n])
    
    return n < query.length
        ? solution(newArr, query, n+1)
        : arr.length
            ? arr
            : [-1]
}

