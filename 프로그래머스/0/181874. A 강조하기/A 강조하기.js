function solution(myString) {
    const arr = myString.toLowerCase().split("")
    
    return arr.map((v) => v === "a" ? "A" : v).join("")
}