function solution(a, b, n) {
    const no_service = 1 // (a-b) / (a-b)
    const service = (n-a) / (a-b)
	return Math.floor(no_service + service) * b
}