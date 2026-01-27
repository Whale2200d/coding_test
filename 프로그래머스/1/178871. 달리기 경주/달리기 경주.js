function solution(players, callings) {
//     let answers = [...players]
    
//     for (const name of callings) {
//         const i = answers.indexOf(name);
//         [answers[i-1], answers[i]] = [answers[i], answers[i-1]]
//     }
    
//     return answers
    
    const answers = [...players]
    const map = new Map()
    players.forEach((name, i) => map.set(name, i))
    
    for (const name of callings) {
        const i = map.get(name)
        if (i === 0) continue
        
        const front = answers[i-1]
        
        answers[i-1] = name
        answers[i] = front
        
        map.set(name, i-1)
        map.set(front, i)
    }
    
    return answers
}