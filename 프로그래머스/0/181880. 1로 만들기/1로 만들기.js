function solution(num_list) {
    let arr = [...num_list]
    let count = 0;
    
    while(!arr.every((v) => v === 1)) {
        arr = arr.map((v) => {
            if (v===1) return 1
            count++
            return v%2===0 ? v/2 : (v-1)/2
        })
    }
    
    return count
}