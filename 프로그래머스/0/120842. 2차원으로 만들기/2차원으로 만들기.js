function solution(num_list, n) {
    let answer = []
    
    for (let i=0; i*n < num_list.length; i++) {
        const arr = num_list.slice(i*n, i*n+n)
        answer.push(arr)
    }
    
    return answer
}