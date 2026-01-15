function solution(sides) {
    const max = Math.max(...sides)
    const rests = sides.filter(v => v !== max)
    
    if (rests.length === 2) {
        return rests[0]+rests[1] > max ? 1 : 2
    } else if (rests.length === 1) {
        return rests[0]+max > max ? 1 : 2
    } else {
        return 1
    }
}