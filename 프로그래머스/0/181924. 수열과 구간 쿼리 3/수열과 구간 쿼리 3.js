function solution(arr, queries) {
    queries.forEach(([a, b]) => {
        [arr[a], arr[b]] = [arr[b], arr[a]] // 구조 분해 할당
    })
    
    return arr
}