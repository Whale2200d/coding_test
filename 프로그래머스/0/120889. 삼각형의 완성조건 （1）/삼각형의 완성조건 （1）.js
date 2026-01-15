function solution(sides) {
    const [x, y, z] = sides.sort((a, b) => a-b)
    
    return x+y > z ? 1 : 2
}