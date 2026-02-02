function solution(arr1, arr2) {
    return arr1.reduce((acc, cur, i) => {
        const result = cur.reduce((a, c, j) => {
            a.push(c+arr2[i][j])
            return a
        }, [])
        
        acc.push(result)
        return acc
    }, [])
}