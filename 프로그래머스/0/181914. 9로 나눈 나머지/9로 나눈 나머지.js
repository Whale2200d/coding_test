function solution(number) {
    return number.split("").reduce((a, c) => a + Number(c), 0) % 9
}