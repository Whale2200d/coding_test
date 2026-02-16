# coding_test

This is an auto push repository for Baekjoon Online Judge created with [BaekjoonHub](https://github.com/BaekjoonHub/BaekjoonHub).

## Programmers 코딩테스트 복습 시스템 구축 프로젝트

### 1. 디렉토리 구조 (문제 단위) 업데이트

- 기존: `coding-test/programmers/n/<problem-title>/` 내 `문제.md`, `코드.js`만 존재했음.
- 변경: 각 문제 폴더에 `review.md`를 추가해 "정답 코드"와 "복습/지식화"를 분리
- 배경: level 0의 개념이 level 1에서 사용됨을 확인, 추후 level-n에도 동일 과정이 반복될 것으로 예측.
  - level-(n+1) 진행 분량(5->3->1)을 줄이는 대신, 기존 학습 내용을 복습하여 성장 곡선 제약 제거
- 해당 방법 선택 이유
  - 현재 나의 상황
    1. 3년차 FE
    2. 경력 지원 시 면접 대비 필요(서류, 필기 합격, 면접이 약점)

    &rarr; 복습 + 패턴화 + 실수 기록 필요 (지식 구조화(Knowledge Consolidation) + 패턴 추출(Pattern Extraction))

  - 선택 이유
    1. (기존) Problem Layer: 문제 단위 사고력 강화
    2. 문제 단위별 Review Layer: 해결 전략을 추상화
    3. Summary Layer 폴더: 문제 &rarr; 패턴 &rarr; 개념화 진행

    &rarr; 문제(Problem) &rarr; 패턴(Pattern) &rarr; 추상화(Abstraction) &rarr; 면접(Interview) 대응

&Rightarrow; 많이 풀 수 있는 사람이 아니라 설명할 수 있는 사람이 되는 구조로 성장

<details>
  <summary><strong>review.md Template 예시</strong></summary>

```md
## // YAML Front Matter로 구조화 메타데이터 작성 (자동 집계/시각화 용도, 추후 예정)

---

problemId: 260101
level: 1
dateSolved: 2026-01-01
algorithms: [bruteforce]
dataStructures: [array]
mistakes: [boundary-condition]
reSolvedCount: 1
timeMinutes: 0

---

## 핵심 아이디어(Key Idea)

## Edge Cases

## Time/Space Complexity

- Time:
- Space:

## Refactor

## Interview 설명 버전
```

</details>

### 2. \_summary 폴더 (집계/운영용 MVP)

- 시각화 자동화(README 차트/Actions)는 추후 진행 예정
- 우선 운영을 위해 최소 3개 문서 생성
  1. `mistakes-log.md`: 실수 유형 Top + 대표 문제 링크
  2. `patterns.md`: 패턴(DFS/Greedy/Parsing 등)별 핵심 요약
  3. `review-queue.md`: 재풀이 큐(오늘 / 3~5일 후 / 2주 후)

<details>
  <summary><strong>표준 태그 스키마로 오타/표기 흔들림 제거를 위한 tags.ts 파일 생성</strong></summary>

```ts
// programmers/_summary/schema/tags.ts
// 태그 값 표준화(오타 방지)용 허용 리스트
// - algorithms: 풀이 전략(Algorithm Pattern)
// - dataStructures: 사용한 자료구조(Data Structure)
// - mistakes: 실수 유형(Mistake Taxonomy)

export const ALGORITHMS = [
  "bruteforce", // 완전탐색(Brute Force): 모든 경우를 시도
  "dfs", // 깊이 우선 탐색(Depth-First Search)
  "bfs", // 너비 우선 탐색(Breadth-First Search)
  "backtracking", // 백트래킹(Backtracking): 탐색 중 조건 불만족 시 되돌리기
  "greedy", // 그리디(Greedy): 매 순간 최선의 선택
  "dp", // 동적 계획법(Dynamic Programming): 부분 문제 결과 재사용
  "prefix-sum", // 누적합(Prefix Sum): 구간 합/상태를 누적으로 빠르게 계산
  "two-pointer", // 투 포인터(Two Pointer): 포인터 2개로 구간/쌍을 조절
  "binary-search", // 이분 탐색(Binary Search): 정렬된 범위에서 반씩 줄이며 탐색
  "sort", // 정렬(Sorting): 정렬 후 규칙/탐색 최적화에 활용
  "simulation", // 시뮬레이션(Simulation): 문제 조건을 그대로 구현
] as const;

export const DATA_STRUCTURES = [
  "array", // 배열(Array)
  "string", // 문자열(String)
  "hash-map", // 해시 맵(Hash Map): JS Map/객체 기반 키-값 테이블
  "set", // 집합(Set): 중복 제거/존재 여부 체크
  "stack", // 스택(Stack): LIFO, 괄호/최근 상태 추적
  "queue", // 큐(Queue): FIFO, BFS 등에서 사용
  "heap", // 힙(Heap): 우선순위 큐(Priority Queue)
  "graph", // 그래프(Graph): 노드-간선 구조
  "tree", // 트리(Tree): 계층 구조
] as const;

export const MISTAKES = [
  "boundary-condition", // 경계값 처리(Boundary Condition): 0/마지막/범위 밖 등
  "off-by-one", // 오프 바이 원(Off-by-One): 인덱스 ±1 오류
  "duplicate-handling", // 중복 처리(Duplicate Handling): 중복 제거/카운팅 실수
  "time-complexity", // 시간복잡도(Time Complexity): 시간초과/비효율 루프
  "null-empty-case", // 빈값/예외 케이스(Null/Empty Case): 빈 배열/undefined 등
  "parsing", // 파싱(Parsing): split/정규식/형변환(Number) 실수
  "state-reset", // 상태 초기화(State Reset): 누적 변수/플래그 리셋 누락
  "overflow-precision", // 오버플로/정밀도(Overflow/Precision): 큰 수/부동소수점 문제
] as const;

// 타입 추론(Type Inference): 배열 요소를 유니온 타입으로 만든다.
// 예: Algorithm = "dfs" | "bfs" | ... 형태
export type Algorithm = (typeof ALGORITHMS)[number];
export type DataStructure = (typeof DATA_STRUCTURES)[number];
export type Mistake = (typeof MISTAKES)[number];
```

</details>

### 3. 3회전 복습 루프 (Spaced Repetition)

- 1회차: review.md 없이 재풀이
- 2회차: 3~5일 후, 20분 타임박스 재풀이
- 3회차: 2주 후, 5분 내 로직 회상/설명 (암기 수준 확인)
- 매 회차 후 reSolvedCount, timeMinutes, result, mistakes 업데이트

### 4. 데이터 기반 시각화 (추후 예정)

- review.md의 YAML 메타데이터를 집계해 stats.json 생성
- stats.json을 차트(SVG/PNG)로 렌더링 후 README에 삽입
- PR 업데이트마다 자동 갱신(Github Actions) 예정
