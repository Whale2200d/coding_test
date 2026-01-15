function solution(numbers) {
    const engNumList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    return +engNumList.reduce((result, eng, num) => result.replaceAll(eng, num.toString()), numbers)
}