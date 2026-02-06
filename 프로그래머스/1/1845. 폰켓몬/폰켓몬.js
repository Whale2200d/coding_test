function solution(nums) {
    // 가질 수 있는 마리수: N/2
    const max = nums.length/2
    const set = [...new Set(nums)]
    
    return set.length > max ? max : set.length
}