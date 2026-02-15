function solution(video_len, pos, op_start, op_end, commands) {
    // video_len: 동영상의 길이를 나타내는 문자열
    // pos: 기능이 수행되지 직전의 재상위치를 나타내는 문자열
    // op_start: 오프닝 시작 시각을 나타내는 문자열
    // op_end: 오프닝 끝나는 시각을 나타내는 문자열
    // commands: 사용자의 입력을 나타내는 1차원 문자열 배열
    
    // 60진법에서 10진법 계산을 위해 초단위 정수로 변경
    const videoLength = convertTimeToSecond(video_len)
    const position = convertTimeToSecond(pos)
    const opStart = convertTimeToSecond(op_start)
    const opEnd = convertTimeToSecond(op_end)
    
    // result 선언
    let result = position
    
    // 0. 시작 전 position이 오프닝 사이에 있는지 확인하고 스킵
    const skipOpening = () => {
        if (result >= opStart && result <= opEnd) result = opEnd
    }
    skipOpening()
    
    // 1. commands 반복 실행
    for (const command of commands) {
        if (command === 'prev') {
            // 10초 전 이동
            // 1. prev 명령 입력
            // 2. 재생 위치를 현재 위치에서 10초 전으로 이동
            // 3. 현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동 (0분 0초)
            result = Math.max(0, Math.min(videoLength, result - 10))
        } else if (command === 'next') {
            // 10초 후 이동
            // 1. next 명령 입력
            // 2. 재생 위치를 현재 위치에서 10초 후로 이동
            // 3. 현재 위치가 남은 위치의 10초 미만일 경우 마지막 위치로 이동 (n분 m초)
            result = Math.max(0, Math.min(videoLength, result + 10))
        }
        
        // 오프닝 건너뛰기
        // 1. 현재 위치가 오프닝 구간인 경우 자동으로 오프닝이 끝나는 위치로 이동
        skipOpening()
    }
    
    // 결과 반환
    // 사용자 입력이 종료된 후 동영상의 위치를 mm:ss 형식으로 반환
    return formatSecondToTime(result)
}

function convertTimeToSecond(timeString) {
    const [minute, second] = timeString.split(':').map(Number)
    return minute*60+second
}

function formatSecondToTime(totalSecond) {
    const minute = Math.floor(totalSecond / 60)
    const second = totalSecond % 60
    
    return `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`
}

