function solution(new_id) {
    if (isValidateId(new_id)) return new_id
    
    // 나타낼 수 있는 특수문자
    const specialCharacter = '-_.~!@#$%^&*()=+[{]}:?,<>/'
    
    // 아이디 규칙에 맞지 않는 아이디를 입력했을 때,
    let changedId = new_id
    // 2. 입력된 아이디와 유사한 아이디 생성 조건

    // 2.1. 소문자로 치환
    // 2.2. 가능 문자 제외 모두 제거
    // 2.3. 연속된 .(dot)은 하나로 치환
    // 2.4. 처음, 끝의 .(dot)은 제거
    changedId = changedId
                .toLowerCase()
                .replace(/[^a-z0-9._-]/g, '')
                .replace(/\.+/g, '.')
                .replace(/^\.|\.$/g, '')
    
    

    // 2.5. 빈 문자열은 'a' 대입
    // 2.7. 길이가 2자 이하라면, 마지막 문자를 3이 될 때까지 반복해서 추가.
    // 2.6. 길이가 16자 이상이면, 처음부터 15자를 제외한 나머지 제거 (이후 15번째 문자가 .(dot)이라면 또 제거)
    const length = changedId.length
    if (length === 0) {
        changedId = 'aaa'
    } else if (length < 3) {
        changedId = changedId + changedId[length-1].repeat(3-length)
    } else if (length > 15) {
        const sliced = changedId.slice(0, 15)
        changedId = sliced[sliced.length-1] === '.' ? sliced.slice(0, 14) : sliced
    }

    // 3. 유사 아이디 반환
    return changedId
}

function isValidateId(id) {
    // 1. 규칙
    // 1.1. 길이 3자 ~ 15자
    // 1.2. 알파벳 소문자, 숫자, -, _, . 문자만 가능
    // 1.3. .(dot)은 처음, 끝, 연속 사용 불가
    const goodLength = id.length >= 3 && id.length <= 15
    const goodString = /^[a-z0-9._-]+$/.test(id)
    const goodDot = !(id[0] === '.' || id[id.length-1] === '.' || id.includes('..'))
    
    return goodLength && goodString && goodDot
}