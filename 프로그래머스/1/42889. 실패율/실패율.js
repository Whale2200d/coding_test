function solution(N, stages) {
    const arr = []
    
    for (let stageNumber=1; stageNumber <= N; stageNumber++) {
        let arrivedButFail = 0
        let arrived = 0
        
        for (const userStage of stages) {
            // n 스테이지에 도달했으면 arrived++
            if (userStage >= stageNumber) {
                arrived++
                // 클리어 못했으면 arrivedButFail++
                if (userStage === stageNumber) arrivedButFail++
            }
        }
        
        arr.push({ stageNumber, failRate: arrivedButFail/arrived })
    }
    
    arr.sort((a, b) => b.failRate - a.failRate || a.stageNumber - b.stageNumber)
    
    return arr.map((v) => v.stageNumber)
}