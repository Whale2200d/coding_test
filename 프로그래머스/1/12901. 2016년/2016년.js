function solution(month, day) {
    const dayNames = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    const daysInMonth2016 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    let offsetDays = 0    
    for (let i=0; i<month-1; i++) offsetDays += daysInMonth2016[i]    
    offsetDays += (day-1)
    
    return dayNames[offsetDays % 7]
}