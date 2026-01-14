function solution(n) {
	const small = []
	const large = []
	
	for (let i=1; i*i <= n; i++) {
		if (n%i === 0) {
			small.push(i)
			if (i===n/i) {continue} else {large.push(n/i)}
		}
	}
	
	return [...small, ...large.reverse()]
}