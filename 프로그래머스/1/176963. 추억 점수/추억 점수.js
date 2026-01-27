function solution(name, yearning, photo) {
    const map = new Map()
    name.forEach((n, i) => map.set(n, yearning[i]))
    
    return [...photo].map((arr, i) => arr.reduce((a, c) => map.get(c) ? a+map.get(c) : a, 0))
}