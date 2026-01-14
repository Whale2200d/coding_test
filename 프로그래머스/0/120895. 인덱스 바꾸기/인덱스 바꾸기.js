function solution(my_string, num1, num2) {
    const answer = [...my_string]
    
    // 1. 임시 temp 사용
    const temp = answer[num1]
    answer[num1] = answer[num2]
    answer[num2] = temp
    
    return answer.join('')
}