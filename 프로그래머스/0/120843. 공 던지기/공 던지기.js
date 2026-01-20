function solution(numbers, k) {
    /**
    사례 1. [1, 2, 3, 4]
    k=1일 경우, numbers[0]
    k=2일 경우, numbers[2]
    k=3일 경우, numbers[0]
    
    사례 2. [1, 2, 3, 4, 5]
    k=1일 경우, numbers[0]
    k=2일 경우, numbers[2]
    k=3일 경우, numbers[4]
    k=4일 경우, numbers[1]
    k=5일 경우, numbers[3]
    k=6일 경우, numbers[0]
    */
    
    const step = 2
    const index = ((k-1)*step) % numbers.length // 해당 index를 k로 계산할 수 있어야 한다.
    return numbers[index]
}