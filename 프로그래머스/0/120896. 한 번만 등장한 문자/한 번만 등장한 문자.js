function solution(s) {
    // find 방식 -> O(n**2)
    // return [...s].reduce((a, c, i) => {
    //     const found = a.find(v => v.value === c)
    //     found ? found.count += 1 : a.push({ value:c, count:1 })
    //     return a
    // }, []).filter(v => v.count === 1).map(v => v.value).sort().join('')
    
    // map 방식 -> O(n)
    const map = new Map();
    
    for (const ch of s) {
        map.set(ch, (map.get(ch) ?? 0)+1)
    }
    
    return [...map.entries()].filter(([_, count]) => count===1).map(([count])=>count).sort().join('')
}