function solution(my_string, s, e) {
    const sliced = my_string.slice(s, e+1)
    const reversed = sliced.split("").reverse().join("")
    const splited = my_string.split("")
    
    splited.splice(s, e-s+1, reversed)
    
    return splited.join("")
}