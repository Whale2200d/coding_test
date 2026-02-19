function solution(n) {
  let oddPart = n;
  while (oddPart % 2 === 0) oddPart /= 2;

  let oddDivisorCount = 0;
  for (let divisor = 1; divisor * divisor <= oddPart; divisor += 2) {
    if (oddPart % divisor !== 0) continue;

    const pairedDivisor = oddPart / divisor;
    oddDivisorCount += (pairedDivisor === divisor) ? 1 : 2;
  }

  return oddDivisorCount;
}
