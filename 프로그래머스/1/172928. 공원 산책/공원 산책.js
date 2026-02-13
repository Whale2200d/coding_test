function solution(park, routes) {
	const height = park.length
	const width = park[0].length

	// 0. 시작점 찾기
	let startRow = 0
	let startCol = 0
	for (let row=0; row<height; row++) {
		const col = park[row].indexOf('S')
		if (col !== -1) { startRow=row; startCol=col; break; }
	}
	//////////////////
	
	const directionGuide = {
		E: [0, 1], // 동
		W: [0, -1], // 서
		S: [1, 0], // 남
		N: [-1, 0], // 북
	}
	
	let currentRow = startRow
	let currentCol = startCol

	// 1. 경로 반복 시행	
	for (const route of routes) {
		const [direction, distanceText] = route.split(' ')
		const [rowGuide, colGuide] = directionGuide[direction]
		const distance = Number(distanceText)
		
		// 2. 경로 끝까지 가상이동 진행
		let nextRow = currentRow
		let nextCol = currentCol
		let isBlocked = false
		
		for (let step=1; step<=distance; step++) {
			nextRow += rowGuide
			nextCol += colGuide
			
			const isOutOfBounds = nextRow < 0 || nextRow >= height || nextCol < 0 || nextCol >= width
			
			// 3. 막혔으면 break (공원을 벗어나거나, 장애물을 만나는지 하나라도 조건 충족하면)
			if (isOutOfBounds || park[nextRow][nextCol] === 'X') { isBlocked=true; break; }
		}
	
		// 4. 막혔으면 다음 명령 진행
		if (isBlocked) continue;
		currentRow=nextRow
		currentCol=nextCol
	}

	return [currentRow, currentCol]
}