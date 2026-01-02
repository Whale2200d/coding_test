function solution(my_string, m, c) {
    const arr = Array.from({ length: Math.ceil(my_string.length/m) }, (_, i) => my_string.slice(i*m, (i+1)*m))
    
    return arr.reduce((acc, cur) => acc+cur[c-1], "")
}