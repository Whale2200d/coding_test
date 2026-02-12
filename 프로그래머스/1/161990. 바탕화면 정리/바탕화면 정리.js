function solution(wallpaper) {
  let minRow = Infinity
  let minCol = Infinity
  let maxRow = -Infinity
  let maxCol = -Infinity

  for (let rowIndex = 0; rowIndex < wallpaper.length; rowIndex++) {
    const rowString = wallpaper[rowIndex]
    for (let colIndex = 0; colIndex < rowString.length; colIndex++) {
      if (rowString[colIndex] === '#') {
        minRow = Math.min(minRow, rowIndex)
        minCol = Math.min(minCol, colIndex)
        maxRow = Math.max(maxRow, rowIndex)
        maxCol = Math.max(maxCol, colIndex)
      }
    }
  }
  // 격자 "칸"이 아니라 격자 "점" 좌표라서 우하단은 +1
  return [minRow, minCol, maxRow + 1, maxCol + 1]
}
