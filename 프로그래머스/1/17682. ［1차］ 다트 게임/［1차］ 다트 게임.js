function solution(dartResult) {
    const square = ['S', 'D', 'T']
    const result = []
    for (let i=0; i<dartResult.length; i++) {
        const curr = dartResult[i]
        const lastIndex = result.length - 1;
        
        // 숫자(0~9) 판별
        if (curr >= "0" && curr <= "9") {
            let score = curr.charCodeAt(0) - 48 // '0' -> 0
            if (score === 1 && dartResult[i + 1] === "0") {
                score = 10
                i += 1
            }
            result.push(score)
            continue
        }
        
        // 문자 S, D, T일 경우, 제곱
        else if (square.includes(curr)) {
            if (curr === "D") result[lastIndex] **= 2
            else if (curr === "T") result[lastIndex] **= 3
            // S는 1제곱이라 그대로
            continue
        }
        
        // 옵션 * / #
        else {
            if (curr === '#') { result[lastIndex] *= -1 }
            else {
                result[lastIndex] *= 2
                if (lastIndex - 1 >= 0) result[lastIndex - 1] *= 2
            }
        }
    }
    
    return result.reduce((a, c) => a+c)
}