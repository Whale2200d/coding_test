function solution(answers) {
    const first = [1, 2, 3, 4, 5]
    const second = [2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const scores = [0, 0, 0]
     
    for (let i=0; i<answers.length; i++) {
        const f = first[i % first.length]
        const s = second[i % second.length]
        const t = third[i % third.length]
        const answer = answers[i]
        
        if (f === answer) scores[0] += 1
        if (s === answer) scores[1] += 1
        if (t === answer) scores[2] += 1
    }
    
    const maxScore = Math.max(...scores)
    
    return scores
        .map((v, i) => ({ value: v, sequence: i+1 }))
        .filter(({value}) => value === maxScore)
        .map(({sequence}) => sequence)
}