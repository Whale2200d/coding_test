function solution(s) {
    const alphabets = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ]
    let result = s
    
    for (const word of alphabets) {
        if (result.includes(word)) { 
            result = result.replaceAll(word, alphabets.indexOf(word))
        }
    }
    
    return +result
}