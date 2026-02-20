function solution(n) {
  const currentNumber = BigInt(n);

  // lowestOneBit: 최하위 1비트 (LSB, Least Significant Bit)
  const lowestOneBit = currentNumber & -currentNumber;

  // 오른쪽에서 올림이 발생하며 가장 오른쪽 "01"이 "10"으로 바뀌는 효과
  const raisedNumber = currentNumber + lowestOneBit;

  // 바뀐 구간(올림으로 영향받은 비트들)
  const changedBitsMask = raisedNumber ^ currentNumber;

  // 스왑 후 오른쪽 구간을 "가장 작은 값"으로 만들기 위해 1들을 최하위로 몰아넣기
  const packedOnes = (changedBitsMask >> 2n) / lowestOneBit;

  const nextNumber = raisedNumber | packedOnes;

  // 프로그래머스는 보통 Number 반환을 요구 (입력 범위가 안전정수라고 가정)
  return Number(nextNumber);
}