function solution(str1, str2) {
    /**
    * answer +=가 느려질 수 있음.(매번 새 문자열 생성)
    */
//     let answer = ""
    
//     for (let i = 0; i < str1.length; i++) {
//         answer += str1[i] + str2[i]
//     }
    
//     return answer
    
    // 방법 1
    // return [...str1].reduce((acc, cur, i) => acc + cur + str2[i], "")
    
    // 방법 2
    return Array.from(str1, (cur, i) => cur + str2[i]).join("")
}