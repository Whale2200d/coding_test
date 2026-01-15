function solution(array, n) {
    return array.sort((a, b) =>
		Math.abs(n-a) - Math.abs(n-b) // 1순위: 거리 비교
		|| a-b // 2순위: 값 비교(오름차순)
	)[0]
}