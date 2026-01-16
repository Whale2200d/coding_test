function solution(sides) {
//     const [x, y] = sides.sort((a, b) => a-b)
//     return 2*x-1
    
    return 2*Math.min(...sides)-1
}