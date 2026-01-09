function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        const add1 = arr1.reduce((a, c) => a+c)
        const add2 = arr2.reduce((a, c) => a+c)
        
        return add1 > add2 ? 1 : add1 < add2 ? -1 : 0
    }
    
    return arr1.length > arr2.length ? 1 : -1
}