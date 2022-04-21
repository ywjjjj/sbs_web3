
/*
    * index: 0부터 시작

    : eq(index)
    - 여러 개의 요소들 중에서, index번째 요소를 선택

    : not('선택자')
    - 여러 개의 요소들 중에서, 선택한 요소를 제외하여 선택

    : lt(index)
    - index번째 요소 이전의 요소들을 선택

    : gt(index)
    - index번째 요소 이후의 요소들을 선택

    : first
    - 첫 번째 요소를 선택
    : last
    - 마지막 요소를 선택
    : even
    - 짝수 요소를 선택
    : odd
    - 홀수 요소를 선택
*/


// 문서 준비 이벤트
$(function() {

    // 0. 첫번째 이미지를 제외한 나머지 이미지를 숨김
    // (첫번째 이후의 요소들을 선택) - hide()
    $('#slide > div:gt(0)').hide()

    // 타이머 - 5초마다
    setInterval (function() {
        // 1. 현재 사진을 fadeOut
        // 2. 다음 사진을 fadeIn
        // 3. 현재 사진을 마지막 요소로 추가
    }, 5000)
    
})