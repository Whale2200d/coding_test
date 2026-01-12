function solution(common) {
    const a = common[0]
    const d = common[2] - common[1]
    const r = common[2] / common[1]
    const n = common.length-1
    
    if (d === common[1] - common[0]) return a+d*(n+1)
    return a*r**(n+1)
}