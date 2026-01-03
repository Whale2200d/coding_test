function solution(my_string, indices) {
    return [...my_string].filter((v, i) => !indices.includes(i)).join("")
}