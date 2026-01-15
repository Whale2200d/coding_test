function solution(i, j, k) {
    const answer = Array.from({ length:j-i+1 }, (_, idx) => (i+idx).toString())
    
    return answer.reduce((a, c) => a + (c.match(new RegExp(k, 'g')) || []).length, 0)
}