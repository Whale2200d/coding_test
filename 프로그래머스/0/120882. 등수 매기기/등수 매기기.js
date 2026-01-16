function solution(score) {
    const avgList = score.map(([eng, math]) => (eng+math)/2)
    const sorted = [...avgList].sort((a, b) => b-a) 
    
    return avgList.map(v => sorted.indexOf(v)+1)
}