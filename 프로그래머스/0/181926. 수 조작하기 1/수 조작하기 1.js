function solution(n, control) {
    let answer = n;
    
    for (let i = 0; i < control.length; i++) {
        if (control[i] === "w") answer += 1
        if (control[i] === "s") answer -= 1
        if (control[i] === "d") answer += 10
        if (control[i] === "a") answer -= 10
    }
    
    return answer
}