function solution(a, b, n) {
    const service = (n-b) / (a-b)
	return Math.floor(service) * b
}