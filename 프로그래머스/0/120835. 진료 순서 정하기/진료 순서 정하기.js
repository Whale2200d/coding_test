function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b-a)
    
    const rankMap = new Map()
    for (let i=0; i<sorted.length; i++) {
        rankMap.set(sorted[i], i+1)
    }
    
    return emergency.map(v => rankMap.get(v))
}