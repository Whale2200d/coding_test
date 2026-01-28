function solution(n) {
    let result = 0
    
    for (let d=1; d*d<=n; d++) {
        if (n % d === 0) {
            result += d
			if (d===n/d) {continue} else {result += n/d}
        }
    }
    
    return result
}