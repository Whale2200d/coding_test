function solution(n) {
    // 합성수: 1과 자신 외 약수가 있으면 합성수
    if (n === 1 || n === 2 || n === 3) return 0
    
    const compositeList = Array(n+1).fill(false)
    
    // 경계선이 루트n인 이유: 루트n보다 클 경우 약수가 될 수 없음.
    for (let d=2; d*d<=n; d++) {
        
        // 어떤 수(p)가 false라면 p는 소수
        if (compositeList[d] === false) {
            // 에라토스테네스의 체
            // 이 때, p를 약수로 하는 모든 수(p*p, p*(p+1), ...)는 합성수(true) 처리
            let p = d
            while (d*p <= n) {
                compositeList[d*p] = true
                p++
            }
        }
    }
    
    return compositeList.filter(v => v === true).length
}