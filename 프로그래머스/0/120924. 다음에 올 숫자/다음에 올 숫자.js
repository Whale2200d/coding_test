function solution(common) {
    const a = common[0]
    const d = common[2] - common[1]
    const r = common[2] / common[1]
    
    if (d === common[1] - common[0]) return a+d*common.length
    return a*r**common.length
}