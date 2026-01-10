function solution(num_list) {
    const result = num_list.sort((a, b) => a-b)
    
    result.splice(0, 5)
    
    return result
}