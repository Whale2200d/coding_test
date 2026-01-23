function solution(num_list) {
    return num_list.reduce((a, c) => c%2===0 ? [a[0]+1, a[1]] : [a[0], a[1]+1], [0, 0])
}