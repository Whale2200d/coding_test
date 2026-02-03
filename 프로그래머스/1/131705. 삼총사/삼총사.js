function solution(numbers) {
    const combinations = getCombinations(numbers, 3)
    
    return combinations.filter((v) => v.reduce((a, c) => a+c) === 0).length
}

const getCombinations = (arr, k) => {
    const res = []
    const dfs = (start, path) => {
        if (path.length === k) return res.push([...path])
        for (let i=start; i<arr.length; i++) {
            path.push(arr[i])
            dfs(i+1, path)
            path.pop()
        }
    }
    dfs(0, [])
    return res
}