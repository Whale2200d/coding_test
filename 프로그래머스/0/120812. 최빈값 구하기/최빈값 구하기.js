function solution(array) {
    const arr = Array.from(new Set(array))
    const counts = arr.map((n) => array.filter((m) => m === n).length)
    
    const max = Math.max(...counts)
    const modeCount = counts.filter((v) => v === max).length
    return modeCount > 1 ? -1 : arr[counts.indexOf(max)]
}