function solution(bandage, health, attacks) {
    // bandage: [시전 시간, 초당 회복량, 추가 회복량]
    // health: 최대 체력
    // attacks: 몬스터의 [공격 시간, 피해량]을 담은 2차원 정수 배열 (오름차순 정렬 완료)
    const [castTime, healPerSecond, bonusHeal] = bandage
    const lastAttackTime = attacks[attacks.length-1][0]
    
    let currentHealth = health
    let successSecond = 0 // 붕대 감기 연속 성공 시간
    let attackIndex = 0
    
    // 1. 1 ~ 마지막 공격 시간까지 반복
    for (let currentTime=1; currentTime<=lastAttackTime; currentTime++) {
        const [attackTime, demage] = attacks[attackIndex]
        const isAttack = attackIndex < attacks.length && attackTime === currentTime
        
        // 3. 공격 받아서 붕대 감기 실패
        if (isAttack) {
            currentHealth -= demage
            if (currentHealth <= 0) return -1
            
            successSecond = 0
            attackIndex++
            continue;
        }
        
        // 2. 붕대 감기 성공
        successSecond++
        currentHealth = Math.min(health, currentHealth+healPerSecond)
        
        // 시전 시간까지 붕대 감기를 성공하면, 추가 체력 회복
        if (castTime === successSecond) {
            currentHealth = Math.min(health, currentHealth+bonusHeal)
            successSecond = 0
        }
    }
    
    // 모든 공격이 끝난 직후 남은 체력 반환
    return currentHealth
}