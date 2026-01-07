function solution(my_string) {
    return my_string.replaceAll(/\s+/g, " ").trim().split(" ")
}