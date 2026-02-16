---
problemId: 120923
level: 0
dateSolved: 2026-01-13
algorithms: [math, simulation]
dataStructures: [array]
mistakes: [time-complexity, math-formula]
reSolvedCount: 0
timeMinutes: 0
---

## 내가 막힌 지점

- 연속된 수의 합을 'while + shift/unshift'로 맞추려니, 매 반복마다 'reduce'가 돌면서 불필요한 비용 발생
- 핵심은 "연속된 수"가 등차수열이라는 점인데, 초기에 등차수열 합 공식을 떠올리지 못함.

## 핵심 아이디어(Key Idea)

- 길이 num인 연속 정수 배열을 `a, a+1, ..., a+num-1`로 두면 합 공식은
  - `total = num * (2a + (num-1)) / 2`
  - 따라서 시작값 `a = (2 * total/num - (num-1)) / 2`
- 시작값 `a`를 구하면 `Array.from({ length: num }, (_, index) => a + index)`로 바로 생성 가능

## Edge Cases

- num이 짝수일 때 평균(`total/num`)이 .5 형태가 될 수 있으므로 a가 정수로 떨어지는 확인 필요(문제는 항상 가능 케이스만 제공)
- `total`이 작아 음수 시작값이 나오는 케이스(예: num=5, total=5 -> [-1, 0, 1, 2, 3])도 정상 처리됨

## Time/Space Complexity

- Time: O(num) # 배열 생성 1회
- Space: O(num)

## Refactor

- (초기) while 루프 + reduce &rarr; 최악에 가깝게 반복 \* O(num) 누적 가능
- (개선) 시작값 `startValue` 계산 후 한 번에 생성

## 재출제 가능 질문

- `a = (2 * total/num - (num-1)) / 2` 유도 과정 설명
- `Array.from({length}, (_, index) => ...)`가 `new Array(length).fill().map(...)`보다 안전한 이유
- 초기 풀이가 느려질 수 있는 이유ㄴ를 Time Complexity 관점에서 설명하라. (reduce / shift / unshift 비용 포함)

## Interview 설명 버전

이 문제는 "연속된 정수 = 공차 1인 등차수열"로 모델링하면 됩니다. 수열을 두고 합 공식을 대입해 시작값 a를 대수적으로 구한 뒤, 배열을 한 번에 생성하면 O(num)에 해결됩니다.
