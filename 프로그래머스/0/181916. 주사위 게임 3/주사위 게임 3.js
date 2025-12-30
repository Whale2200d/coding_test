function solution(a, b, c, d) {
    const arr = [a, b, c, d]
    const set = new Set(arr)
    const [p, q] = duplicate(arr);
    const [s, r] = arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v));
    
    if (set.size === 1) return 1111 * a
    if (set.size === 2) {
        return duplicate(arr).length === 1
            ? (10*p+s)**2
            : (p+q)*Math.abs(p-q)
    }
    if (set.size === 3) {
        return s*r
    }
    return arr.sort((a, b) => a-b)[0]
}

function duplicate(arr) {
    const seen = new Set();
    const dup = new Set();
    
    for (const v of arr) {
        if (seen.has(v)) dup.add(v);
        else seen.add(v);
    }
    
    return [...dup];
}