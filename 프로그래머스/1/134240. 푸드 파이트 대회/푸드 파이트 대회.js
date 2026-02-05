function solution(food) {
    let result = '0'
    
    for (let foodNumber=food.length-1; foodNumber>=1; foodNumber--) {
        const foodCount = Math.floor(food[foodNumber]/2)
        const repeated = `${foodNumber}`.repeat(foodCount)
        result = repeated + result + repeated
    }
    
    return result
}