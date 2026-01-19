function solution(n) {
    // 합성수: 1과 자신 외 약수가 있으면 합성수
    if (n === 1 || n === 2 || n === 3) return 0
    
    const compositeList = Array(n+1).fill(false)
    
    for (let d=2; d*d<=n; d++) {        
        if (compositeList[d] === false) {
            let p = d
            while (d*p <= n) {
                compositeList[d*p] = true
                p++
            }
        }
    }
    
    return compositeList.filter(v => v === true).length
}