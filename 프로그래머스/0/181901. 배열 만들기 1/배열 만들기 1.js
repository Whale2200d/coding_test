function solution(n, k) {
    return Array.from({ length: n }, (_, i) => i+1).reduce((a, c) => {
        if (c % k === 0) {a.push(c); return a;} else { return a; }
    }, [])
}