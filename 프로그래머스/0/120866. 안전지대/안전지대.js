function solution(board) {
    const n = board.length
    const risk = Array.from({ length: n }, () => Array(n).fill(false))
    
    const dr = [-1, -1, -1, 0, 0, 1, 1, 1]
    const dc = [-1, 0, 1, -1, 1, -1, 0, 1]
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            
            if (board[i][j] === 1) {
                risk[i][j] = true
                
                for(let k=0; k<8; k++) {
                    const nr = i+dr[k]
                    const nc = j+dc[k]
                    
                    if (nr>=0 && nr<n && nc>=0 && nc<n) {
                        risk[nr][nc] = true
                    }
                }
            }
        }
    }
    
    return risk.flat().filter(v => v===false).length
}