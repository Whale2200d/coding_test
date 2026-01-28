function solution(n, w, num) {
  // 0-index 기준으로 변환
  const row = Math.floor((num - 1) / w);
  const k = (num - 1) % w;

  // 지그재그 반영한 "실제 열(col)"
  const col = (row % 2 === 0) ? k : (w - 1 - k);

  // 전체 층 수
  const H = Math.ceil(n / w);

  // 기본: 같은 열의 윗층 개수
  let above = (H - 1) - row;

  // 마지막 층이 꽉 차지 않으면(부분 채움), 마지막 층에서 col이 존재하는지 체크
  const lastCount = n % w; // 0이면 full
  if (lastCount !== 0 && row < H - 1) {
    const lastRow = H - 1;
    const lastEven = (lastRow % 2 === 0); // 마지막 층 방향

    const existsInLast = lastEven
      ? (col < lastCount)         // 왼->오로 lastCount개 채움
      : (col >= w - lastCount);   // 오->왼으로 lastCount개 채움

    if (!existsInLast) above -= 1;
  }

  return above + 1; // 자기 자신 포함
}
