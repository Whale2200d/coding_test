function solution(num_list) {
    let addOdd = ""; // 홀수만 순서대로 이어 붙인 수
    let addEven = ""; // 짝수만 순서대로 이어 붙인 수
    
    for (let i = 0; i < num_list.length; i++) {
        const num = Number(num_list[i])
        if (num % 2 === 0) {
            addEven += num_list[i]
        } else {
            addOdd += num_list[i]
        }
    }
    
    return Number(addOdd) + Number(addEven)
}