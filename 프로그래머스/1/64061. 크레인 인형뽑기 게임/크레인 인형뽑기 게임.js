function solution(board, moves) {
    // 1. 필요한 배열 선언 (stack, count)
    let stack = []
    let count = 0
    
    // 2. 크레인 작동 위치를 확인하여, 해당 값을 stack에 담기
    // 2.1. 실제 인덱스(j)는 moves - 1로 선언
    // 2.2. j를 돌면서 가장 첫 번째로 0이 아닌 값이 나올 때, 이벤트 수행
    // 2.3. 이벤트: stack의 마지막 값과 같을 경우, (pop + count++) : 아닐 경우 push
    // 2.4. 인형 하나를 잡으면, 더 반복할 필요 없으므로 break 실행
    for (const move of moves) {
		const j = move - 1
		
		for (let i=0; i<board.length; i++) {
			const character = board[i][j]
			if (character === 0) continue;
			
			// 집은 뒤, 0으로 칸 변경
			board[i][j] = 0
			
			// slice로 재생성보다 pop 사용
			const lastCharacter = stack[stack.length-1]
			if (lastCharacter === character) { stack.pop();	count++; }
			else { stack.push(character) }
			
			break; // 한 개만 집기
		}
	}
    
    // 3. 결과 반환
    // 3.1. 사라진 횟수 * 회당 인형 개수
    return count*2
}