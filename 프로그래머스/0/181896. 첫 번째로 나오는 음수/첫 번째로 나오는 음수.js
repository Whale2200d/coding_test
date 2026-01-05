function solution(num_list) {
    for (let i=0; i <= num_list.length; i++) {
        if (Math.sign(num_list[i]) === -1) return i
    }
    
    return -1
}