function solution(n) {
    let low = 1, high = Math.floor(Math.sqrt(n))
    
    while(low <= high) {
        const mid = Math.floor((low+high)/2)
        if (mid**2 === n) return (mid+1)**2
        else if (mid**2 < n) low = mid+1
        else if (mid**2 > n) high = mid-1
    }
    
    return -1
}