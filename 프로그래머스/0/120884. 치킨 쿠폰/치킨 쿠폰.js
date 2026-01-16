function solution(chicken) {
    let max = 0;
    let currentCoupons = chicken; // 현재 쿠폰의 개수
    
    while(currentCoupons >= 10) {
        const service = Math.floor(currentCoupons/10)
        const rest = currentCoupons%10
        
        max += service
        currentCoupons = service+rest
    }
    
    return max
}