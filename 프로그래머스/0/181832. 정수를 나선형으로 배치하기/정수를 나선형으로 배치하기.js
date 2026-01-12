function solution(n) {
    const answer = Array.from({ length: n }, () => Array(n).fill(0))
    
    const dr = [0, 1, 0, -1]
    const dc = [1, 0, -1, 0]
    
    let r=0, c=0, dir=0
    
    for (let val=1; val<=n*n; val++) {
        answer[r][c] = val
        
        const nr = r + dr[dir]
        const nc = c + dc[dir]
        
        if (nr < 0 || nr >= n || nc < 0 || nc >= n || answer[nr][nc] !== 0) {dir = (dir + 1) % 4}
        
        r += dr[dir]
        c += dc[dir]
    }
    
    return answer
}