function solution(park, routes) {
  const height = park.length;
  const width = park[0].length;

  // 시작점 S 찾기
  let startRow = 0;
  let startColumn = 0;
  for (let row = 0; row < height; row += 1) {
    const column = park[row].indexOf("S");
    if (column !== -1) {
      startRow = row;
      startColumn = column;
      break;
    }
  }

  const directionDeltaByCode = {
    N: [-1, 0], // 북
    S: [1, 0],  // 남
    W: [0, -1], // 서
    E: [0, 1],  // 동
  };

  let currentRow = startRow;
  let currentColumn = startColumn;

  for (const route of routes) {
    const [directionCode, distanceText] = route.split(" ");
    const distance = Number(distanceText);
    const [rowDelta, columnDelta] = directionDeltaByCode[directionCode];

    let nextRow = currentRow;
    let nextColumn = currentColumn;
    let isBlocked = false;

    for (let step = 1; step <= distance; step += 1) {
      nextRow += rowDelta;
      nextColumn += columnDelta;

      const isOutOfBounds =
        nextRow < 0 || nextRow >= height || nextColumn < 0 || nextColumn >= width;

      if (isOutOfBounds || park[nextRow][nextColumn] === "X") {
        isBlocked = true;
        break;
      }
    }

    if (!isBlocked) {
      currentRow = nextRow;
      currentColumn = nextColumn;
    }
  }

  return [currentRow, currentColumn];
}
