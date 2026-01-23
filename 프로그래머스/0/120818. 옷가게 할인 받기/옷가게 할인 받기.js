function solution(price) {
    const discounts = [
        { standard: 500000, rate: 20 },
        { standard: 300000, rate: 10 },
        { standard: 100000, rate: 5 },
    ]
    
    for(let i=0; i<discounts.length; i++) {
        if (price >= discounts[i].standard)
            return Math.floor(price*(1-discounts[i].rate/100))
    }
    return price
}