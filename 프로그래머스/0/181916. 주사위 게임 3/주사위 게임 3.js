function solution(a, b, c, d) {
    const arr = [a, b, c, d]
    const set = new Set(arr)
    const [p, q] = duplicate(arr);
    const [s, r] = arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v));
    
    if (set.size === 1) return 1111 * a
    else if (set.size === 2 && duplicate(arr).length === 1) return (10*p+s)**2
    else if (set.size === 2) return (p+q)*Math.abs(p-q)
    else if (set.size === 3) return s*r
    else return Math.min(a, b, c, d)
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