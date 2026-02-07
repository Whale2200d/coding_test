function solution(nums) {
    // 0. 경우의 개수
    let primeSumCount = 0
    // 0. 동일한 sum 결과 캐시(Memoization)
    const primeCheckCache = new Map()
    
    // 1. 조합으로 3개 선별
    for (let first=0; first < nums.length-2; first++) {
        for (let second=first+1; second < nums.length-1; second++) {
            for (let third=second+1; third < nums.length; third++) {
                const sum = nums[first] + nums[second] + nums[third]
                
                
                let isPrimeSum;
                // 2. isPrime으로 판별
                isPrimeSum = primeCheckCache.has(sum) ? primeCheckCache.get(sum) : isPrime(sum)
                
                if (primeCheckCache.has(sum)) primeCheckCache.set(sum, isPrimeSum)
                if (isPrimeSum) primeSumCount += 1
            }
        }
    }
    
    return primeSumCount
}

function isPrime(number) {
    if (number < 2) return false
    if (number === 2) return true
    if (number % 2 === 0) return false

    const limit = Math.floor(Math.sqrt(number))
    for (let divisor = 3; divisor <= limit; divisor += 2) {
        if (number % divisor === 0) return false
    }
    return true
}