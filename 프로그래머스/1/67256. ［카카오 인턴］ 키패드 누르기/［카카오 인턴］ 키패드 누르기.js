function solution(numbers, hand) {
    // numbers: 눌러야 할 번호 배열
    // hand: 왼손잡이인지 오른손잡이인지
    // location: 두 손의 기존 위치 판단
    
    const leftList = [1, 4, 7]
    const rightList = [3, 6, 9]
    const preferredHand = hand === 'left' ? 'L' : 'R'
    const location = { left:{ row:3, col:0 }, right:{ row:3, col:2 } } 
    const keypad = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['*', '0', '#']]
    const positionByKey = new Map(
        keypad.flatMap((rowList, rowIndex) => rowList.map((key, colIndex) => [key, { row: rowIndex, col: colIndex }]))
    )
    
    return numbers.reduce((result, number) => {
        const key = number.toString()
        const currPosition = positionByKey.get(key)
        let current = ''
        
        if (leftList.includes(number)) {
            current = 'L'
            location.left = currPosition
        }
        else if (rightList.includes(number)) {
            current = 'R'
            location.right = currPosition
        }
        else {
            // 현재 숫자와 기존 손의 위치를 비교
            const leftDistance = Math.abs(currPosition.row - location.left.row)
                + Math.abs(currPosition.col - location.left.col)
            const rightDistance = Math.abs(currPosition.row - location.right.row)
                + Math.abs(currPosition.col - location.right.col)
            
            // 더 짧은 거리의 손으로 추가
            current =
                leftDistance < rightDistance ? 'L' :
                leftDistance > rightDistance ? 'R' :
                preferredHand
            
            // 손가락 위치 변경
            if (current === 'L') location.left = currPosition
            else location.right = currPosition
        }
        
        return result + current
    }, '')
}