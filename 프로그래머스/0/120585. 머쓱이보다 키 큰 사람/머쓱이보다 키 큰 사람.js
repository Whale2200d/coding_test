function solution(array, height) {
    const sorted = array.sort((a, b) => b-a)
    let count = 0
    let index = 0
    
    while(sorted[index] > height) { count++; index++; }
    
    return count
}