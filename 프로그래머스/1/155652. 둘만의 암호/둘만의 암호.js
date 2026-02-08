function solution(s, skip, index) {
    // 1. 스킵을 적용한 알파벳 집합 구성
    const skipSet = new Set(skip)
    const validLetters = []
    for(let charCode=97; charCode<=122; charCode++) {
        const letter = String.fromCharCode(charCode)
        if (!skipSet.has(letter)) validLetters.push(letter)        
    }
    
    // 2. 빠른 조회를 위해 알파벳과 인덱스 객체 생성
    const validMap = new Map()
    for (let i=0; i<validLetters.length; i++) { validMap.set(validLetters[i], i) }
    
    // 3. 나머지 계산으로 index의 실제 위치 확인
    let result = ''
    for (const letter of s) {
        const currPosition = validMap.get(letter)
        const nextPosition = (currPosition + index) % validLetters.length
        result += validLetters[nextPosition]
    }
    
    return result
}