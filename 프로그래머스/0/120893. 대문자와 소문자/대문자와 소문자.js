function solution(my_string) {
    return [...my_string].reduce((a, c) => c.toUpperCase() === c ? a+c.toLowerCase() : c.toLowerCase() === c ? a+c.toUpperCase() : a+c, "")
}