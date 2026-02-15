function solution(id_list, report, k) {
    // id_list: 이용자의 ID가 담긴 문자열 배열
    // report: 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
    // k: 정지 기준이 되는 신고 횟수
    
    // 1. 필요 데이터 생성
    // 1.1. 중복 신고 제거된 report (동일 대상 1회 처리)
    const uniqueReports = new Set(report)
    
    // 1.2. 유저별 신고당한 횟수 테이블
    const reportedCountById = new Map()
    for (const id of id_list) reportedCountById.set(id, 0)
    
    // 1.3. 신고 관계 테이블
    const reportedCountByReporter = new Map()
    for (const id of id_list) reportedCountByReporter.set(id, new Set())
    
    // 1.4. 테이블 업데이트
    for (const report of uniqueReports) {
        const [reporter, reportee] = report.split(' ')
        reportedCountById.set(reportee, reportedCountById.get(reportee)+1)
        reportedCountByReporter.get(reporter).add(reportee)
    }
    
    // 2. 데이터 기반 메인 로직 실행
    // k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송
    // 2.1. 정지 대상 추출
    const stopedCountById = new Set()
    for (const [id, count] of reportedCountById.entries()) {
        if (count >= k) stopedCountById.add(id)
    }
    
    // 2.2. 정지 대상으로 각 유저별 메일 받는 횟수 계산
    const mailCountById = new Map()
    for (const id of id_list) mailCountById.set(id, 0)
    
    for (const reporter of id_list) {
        let mailCount = 0
        for (const reportee of reportedCountByReporter.get(reporter)) {
            if (stopedCountById.has(reportee)) mailCount++
        }
        mailCountById.set(reporter, mailCount)
    }
    
    // 3. 결과 반환
    // 각 유저별로 처리 결과 메일을 받은 횟수 배열
    return id_list.map((id) => mailCountById.get(id))
}