function solution(number, limit, power) {
    // 1. 기사 번호의 약수 개수 = 공격력 (1~number)
    // 2. 협약으로 공격력 제한 수치 (공격력의 최대치) - limit
    // 3. 무기점 무개의 공격력 - power
    
    const answer = []
    
    for (let i=1; i<=number; i++) {
        const strength = getAliquotCount(i)
        answer.push(strength > limit ? power : strength) 
    }
    
    return answer.reduce((a,c) => a+c)
}

function getAliquotCount(num) {
    if (num === 1) return 1
    if (num === 2 || num === 3) return 2

    let count = 2
    
    for (let d=2; d*d <= num; d++) { 
        if (num%d !== 0) continue;
        count += d*d === num ? 1 : 2 
    }
    
    return count
}
