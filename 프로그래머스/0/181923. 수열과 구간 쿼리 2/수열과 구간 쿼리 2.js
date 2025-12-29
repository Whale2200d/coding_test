function solution(arr, queries) { 
    return queries.map((([s, e, k]) => arr.slice(s, e+1).reduce((best, v) => v > k && (best === null || v < best) ? v : best, null) || -1))
}