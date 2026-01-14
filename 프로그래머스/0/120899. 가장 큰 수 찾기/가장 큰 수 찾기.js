function solution(array) {
    const obj = array.map((v, i) => { return {value: v, index: i} }).sort((a, b) => b.value-a.value)[0]
    
    return [obj.value, obj.index]
}