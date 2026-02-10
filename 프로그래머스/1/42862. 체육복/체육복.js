function solution(n, lost, reserve) {
    // lost, reserve 모두 들어있는 학생은 lost, reserve에서 제거
    const lostSet = new Set(lost)
    const reserveSet = new Set(reserve)
    
    for (const studentNumber of reserve) {
        if (lostSet.has(studentNumber)) {
            lostSet.delete(studentNumber)
            reserveSet.delete(studentNumber)
        }
    }
    
    const sortedLost = [...lostSet].sort((a, b) => a-b)
    const sortedReserve = [...reserveSet].sort((a, b) => a-b)
    
    let canAttendCount = n - sortedLost.length
    
    for (const lostStudentNumber of sortedLost) {
        const frontNumber= lostStudentNumber - 1
        const backNumber= lostStudentNumber + 1
        
        const frontIndex = sortedReserve.indexOf(frontNumber)
        if (frontIndex !== -1) {
            sortedReserve.splice(frontIndex, 1)
            canAttendCount++
            continue;
        }
        
        const backIndex = sortedReserve.indexOf(backNumber)
        if (backIndex !== -1) {
            sortedReserve.splice(backIndex, 1)
            canAttendCount++
        }
    }
    
    return canAttendCount
}