function solution(chicken) {
    if (chicken === 0) return 0
    
    const service = (chicken - 1) / 9
    
    return Math.floor(service)
}