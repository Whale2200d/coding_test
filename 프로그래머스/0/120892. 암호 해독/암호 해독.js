function solution(cipher, code) {
    let answer = ""
    let i = code
    
    while(i <= cipher.length) {
        answer = answer + cipher[i-1]
        i += code
    }
    
    return answer
}