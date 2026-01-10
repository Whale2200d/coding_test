function solution(num_str) {
    return [...num_str].reduce((a, c) => a+Number(c), 0)
}