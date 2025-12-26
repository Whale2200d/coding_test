function solution(code) {
    let mode = 0
    let ret = ""
    
    
    for (let i=0; i < code.length; i++) {
        if (code[i] === "1") {
            mode = 1 - mode // 1 또는 0
            continue
        }
        
        if (mode === 0) {
            if (code[i] !== "1" && i % 2 === 0) ret += code[i]
        } else {
            if (code[i] !== "1" && i % 2 === 1) ret += code[i]
        }
    }
    
    return ret === "" ? "EMPTY" : ret
}