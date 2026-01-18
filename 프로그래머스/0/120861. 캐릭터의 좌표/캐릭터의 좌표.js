function solution(keyinput, board) {
    const xLimit = (board[0]-1)/2
    const yLimit = (board[1]-1)/2
    
    let x=0, y=0
    
    for (const key of keyinput) {
        let nx=x, ny=y
        
        if (key === 'left') nx--
        else if (key === 'right') nx++
        else if (key === 'down') ny--
        else if (key === 'up') ny++
        
        if (nx >= -xLimit && nx <= xLimit && ny >= -yLimit && ny <= yLimit) {
            x=nx
            y=ny
        }
    }
    
    return [x, y]
}