function solution(n){
    let num = n
    let answer = 0
    
    for (let i=0; i<n.toString().length; i++) {
        answer += num%10
        num = Math.floor(num/10)
    }
    
    return answer
}