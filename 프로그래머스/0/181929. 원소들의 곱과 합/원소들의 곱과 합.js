function solution(num_list) {
    const sumMultiple = num_list.reduce((a, c) => a * c)
    const secondPowerSum = Math.pow(num_list.reduce((a, c) => a + c), 2)
    
    return +(sumMultiple < secondPowerSum)
}