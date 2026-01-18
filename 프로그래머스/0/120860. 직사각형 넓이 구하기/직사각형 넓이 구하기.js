function solution(dots) {
    const xs = [...new Set(dots.map(([x, _]) => x))]
    const ys = [...new Set(dots.map(([_, y]) => y))]
    
    return Math.abs(xs[0]-xs[1])*Math.abs(ys[0]-ys[1])
}