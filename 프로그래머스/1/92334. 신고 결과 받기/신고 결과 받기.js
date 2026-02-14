function solution(id_list, report, k) {
  // 1. 동일 "신고자 신고대상" 중복 제거
  const uniqueReports = new Set(report)

  // 2. 신고당한 횟수 집계: reportedUserId -> count
  const reportedCountByUserId = new Map()
  for (const userId of id_list) reportedCountByUserId.set(userId, 0)

  // 신고 관계 저장: reporterUserId -> Set(reportedUserId)
  const reportedUsersByReporter = new Map()
  for (const userId of id_list) reportedUsersByReporter.set(userId, new Set())

  for (const reportLine of uniqueReports) {
    const [reporterUserId, reportedUserId] = reportLine.split(" ")
    reportedUsersByReporter.get(reporterUserId).add(reportedUserId)
    reportedCountByUserId.set(
      reportedUserId,
      reportedCountByUserId.get(reportedUserId) + 1
    )
  }

  // 3. 정지 대상 추출
  const suspendedUserIdSet = new Set()
  for (const [userId, count] of reportedCountByUserId.entries()) {
    if (count >= k) suspendedUserIdSet.add(userId)
  }

  // 4. 각 유저가 메일 받는 횟수 계산 (id_list 순서대로)
  const mailCountByUserId = new Map()
  for (const userId of id_list) mailCountByUserId.set(userId, 0)

  for (const reporterUserId of id_list) {
    let mailCount = 0;
    for (const reportedUserId of reportedUsersByReporter.get(reporterUserId)) {
      if (suspendedUserIdSet.has(reportedUserId)) mailCount += 1
    }
    mailCountByUserId.set(reporterUserId, mailCount)
  }

  return id_list.map((userId) => mailCountByUserId.get(userId))
}