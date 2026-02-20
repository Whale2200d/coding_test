function solution(n) {
    // 연속된 수의 합 = 등차수열의 합 공식
    // n = k * (2*a + k - 1) / 2 이므로,
    // a = ((2*n/k) - (k-1)) / 2 이다.
    // a는 초항이므로, 자연수여야 한다.
    
    // a가 자연수가 되기 위한 조건 3가지
    // 1. 2*n / k는 정수 -> k는 2*n의 약수
    // 2. 분자가 짝수(2의 배수)가 되려면, 2*n/k와 k-1의 관계는 짝, 짝 또는 홀, 홀
    // 3. a >= 1이므로, 2*n/k >= k+1
    
    let k = 1
    let count = 0
    
    // 3. a >= 1
    while (2*n/k >= k+1) {
        const leftNumber = (2*n/k)
        const rightNumber = k-1
        
        // 1. 2*n / k는 정수
        // 2. (짝 and 짝) or (홀 and 홀)
        const firstCondition = Number.isInteger(leftNumber)
        const secondCondition = firstCondition && (leftNumber % 2 === rightNumber % 2)
        if (secondCondition) count++
        k++
    }
    
    return count
}
