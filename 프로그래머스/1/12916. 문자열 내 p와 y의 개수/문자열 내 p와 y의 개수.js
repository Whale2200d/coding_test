function solution(s){
    const lower = s.toLowerCase()
    const pArr = lower.match(/p/g) ?? []
    const yArr = lower.match(/y/g) ?? []
    
    return pArr || yArr ? pArr.length === yArr.length : true
}