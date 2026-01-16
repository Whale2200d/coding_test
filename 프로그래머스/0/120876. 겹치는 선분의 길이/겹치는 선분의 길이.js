function solution(lines) {
    const events = lines.reduce((a, [s, e]) => {
        a.push([s, +1])
        a.push([e, -1])
        return a
    }, []).sort((a, b) => a[0]-b[0])
        
    let result = 0
    let acc = 0
    
    for (let i=0; i<events.length-1; i++) {
        const [currentPoint, count] = events[i]
        acc += count
        const nextPoint = events[i+1][0]
        const distance = nextPoint - currentPoint
        
        if (acc >= 2) result += distance;
    }
    
    return result
}