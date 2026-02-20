function solution(n) {
    let count = 0
    
    // 홀수 부분만 남기기 (홀수인 약수의 개수 = oddPart의 약수 개수)
    let oddPart = n
    while (oddPart%2 === 0) oddPart /= 2
    
    for (let d=1; d*d <= oddPart; d += 2) {
				if (oddPart%d !== 0) continue // 약수가 아니면 다음으로 넘어가기
				
				count++
				if (oddPart/d !== d) count++ // 제곱근이 아니면 짝이 되는 약수도 추가
    }
    
    return count
}