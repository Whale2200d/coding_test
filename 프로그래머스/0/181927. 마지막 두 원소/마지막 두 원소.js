function solution(num_list) {
    const results = [...num_list]
    const lastNum = num_list[num_list.length-1]
    const prevNum = num_list[num_list.length-2]
    
    lastNum > prevNum ? results.push(lastNum-prevNum) : results.push(lastNum*2)
    
    return results
}