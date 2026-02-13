function solution(schedules, timelogs, startday) {
    // schedules: 직원 n(length)명이 설정한 출근 희망 시각 배열
    // timelogs: 실제 출근 시각 배열(2차원)
    // startday: 이벤트를 시작한 요일 정수
    
    let count = 0
    for (let i=0; i<schedules.length; i++) {        
        const userSetUpTime = schedules[i]
        const userTimelogs = timelogs[i]
        const deadlineMinutes = toMinutes(userSetUpTime) + 10
        let userCount = 0
        for (let offset=0; offset<7; offset++) {
            const currentDay = ((startday - 1 + offset) % 7)+1
            const userActualTime = userTimelogs[offset]
            
            if (currentDay === 6 || currentDay === 7) continue;
            const actualMinutes = toMinutes(userTimelogs[offset]);
            if (actualMinutes <= deadlineMinutes) userCount++
        }
        
        if (userCount === 5) count++
    }
    
    return count
}

function toMinutes(timeHHMM) {
    const hour = Math.floor(timeHHMM / 100);
    const minute = timeHHMM % 100;
    return hour * 60 + minute;
}