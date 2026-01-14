function solution(my_string) {
  const result = my_string.split(" ")

  return result.reduce((a, c, i) => {
    if (Number(c)) {
      const symbol = result[i-1]
      if (symbol) return symbol === "+" ? +a + +c : +a - +c
      return +a
    } else {
      return +a
    }
  })
}