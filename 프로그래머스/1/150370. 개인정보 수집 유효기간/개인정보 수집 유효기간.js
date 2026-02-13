function solution(today, terms, privacies) {
    // today: 오늘 날짜를 의미하는 문자열 (YYYY.MM.DD)
    // terms: 약관의 유효기간을 담은 1차원 문자열 배열 (<"A 6">[])
    // privacies: 수집된 개인정보의 정보를 담은 1차원 문자열 배열 (<"YYYY.MM.DD A">[])
    
    /**
    0. today = 2022.05.19
    1. 2021.05.02 A -> 2021.11.02에 파기되어야 함. -> 오늘 날짜와 비교 후 1번 파기
    2. 2021.07.01 B -> 2022.07.01에 파기되어야 함. -> 오늘 날짜와 비교 후 2번 보관
    3. 2022.02.19 C -> 2022.05.19에 파기되어야 함. -> 오늘 날짜와 비교 후 3번 파기
    4. 2022.02.20 C -> 2022.05.20에 파기되어야 함. -> 오늘 날짜와 비교 후 4번 보관
    => 결과: 파기해야 할 개인정보 배열 [1, 3] 반환
    */
    
    // 0. 파기해야 할 개인정보 result 배열 선언
    const result = []
    // 1. 수집된 개인정보 배열을 반복
    for (let i=0; i<privacies.length; i++) {
        // 2. 현재 개인정보의 유효기간 확인 후, 예상 파기 날짜 계산
        const [userStartDate, userTerm] = privacies[i].split(' ')
        const [term, expiration] = terms.filter((term) => term.split(' ')[0] === userTerm)[0].split(' ')
        const expectedExpiration = addMonthsToDate(userStartDate, expiration) // 예상 파기 날짜
        
        // 3. 예상 파기 날짜와 오늘 날짜 비교하여 크거나 같으면 result 배열에 해당 index+1 담기
        if (isPastDate(today, expectedExpiration)) result.push(i+1)
    }
    
    return result
}

// 베이스 날짜에 추가할 달을 추가 계산하는 함수
function addMonthsToDate(baseDateText, monthsToAdd) {
    const [yearString, monthString, dayString] = baseDateText.split('.')
    const year = Number(yearString)
    const month = Number(monthString)
    const day = Number(dayString)
    
    const baseDate = new Date(year, month-1, day)
    baseDate.setMonth(baseDate.getMonth() + Number(monthsToAdd))
    
    const changedYear = baseDate.getFullYear()
    const changedMonth = String(baseDate.getMonth() + 1).padStart(2, '0')
    const changedDay = String(baseDate.getDate()).padStart(2, '0')
    return `${changedYear}.${changedMonth}.${changedDay}`
}

// 파기 날짜인지 확인 함수 (true일 경우, 파기 / false일 경우 보관)
function isPastDate(baseDate, expectedDate) {
    const normalizeDateText = (dateText) => dateText.replaceAll('.', '')
    const baseDateNumber = Number(normalizeDateText(baseDate))
    const expectedDateNumber = Number(normalizeDateText(expectedDate))
    return baseDateNumber >= expectedDateNumber
}