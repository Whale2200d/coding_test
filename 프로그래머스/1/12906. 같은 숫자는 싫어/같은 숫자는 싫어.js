function solution(arr) {
    const result = []
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === arr[i+1]) { continue }
        else result.push(arr[i])
    }
    
    return result
}