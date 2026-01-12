function solution(babbling) {
    const says = ["aya", "ye", "woo", "ma"]
    const regex = /^(aya|ye|woo|ma)+$/
    
    return babbling.reduce((a, c) => regex.test(c) ? a+1 : a, 0)
}