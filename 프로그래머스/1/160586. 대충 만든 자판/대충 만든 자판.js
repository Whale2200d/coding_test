function solution(keymap, targets) {
    const result = targets.map((target) => {
        let acc = 0
        for (const char of target) {
            const min = keymap.map((v) => v.indexOf(char)).filter((v) => v !== -1)
            
            if (min.length === 0) return -1
            acc += Math.min(...min) +1
        }
        
        return acc
    })
    
    return result
}