function solution(X, Y) {
    // 1. X, Y 내 각 숫자의 반복 횟수 파악
    // 1.1. X, Y의 개수를 담을 배열 선언
    // 1.2. X, Y 내 숫자 개수 세기
    const countX = Array(10).fill(0)
    const countY = Array(10).fill(0)
    
    for (const digitX of X) countX[digitX.charCodeAt(0) - 48] += 1;
    for (const digitY of Y) countY[digitY.charCodeAt(0) - 48] += 1;
    
    
    // 2. 배열을 돌면서, 중복되는 만큼 추가 (index가 각 숫자이며, value가 숫자의 개수)
    // 2.1. result 변수 생성
    // 2.2. 0~9까지 반복문 실행
    // 2.3. Math.min으로 중복 판단
    // 2.4. 중복된 횟수가 0일 경우, 추가하지 않음
    let result = ''
    
    for (let digit=0; digit<=9; digit++) {
        const commonCount = Math.min(countX[digit], countY[digit])
        if (commonCount > 0) result += String(digit).repeat(commonCount)
    }
    
    // 3. 예외 케이스 제외
    // 3.1. 짝꿍이 없을 경우, -1 처리
    // 3.2. result이 0으로 시작할 경우, 0 처리
    // 3.3. 그 외 정상 반환
    const set = new Set([...result])
    
    if (result === '') return '-1'
    else if (set.size === 1 && result[0] === '0') return '0'
    else return [...result].sort((a, b) => (+b)-(+a)).join('')
}