
// 문서 준비 이벤트
$(function () {
    // 이벤트 처리 메서드
    // -on('이벤트 타입', 이벤트핸들러(콜백함수))
    // * 이벤트 타입 : click, keyup, change ...
    // * 이벤트 핸들러 : 이벤트 발생시, 실행될 함수

    // 클릭 이벤트 (click)
    $('#item1').on('click', function() {
        $('#item1').css('color', 'hotpink')
    })

    // this: 현재 선택한 요소를 가리키는 키워드
    $('#item2').on('click', function () {
        $(this).css('color', 'hotpink')
    })

    $('#item3').on('mouseover', function () {
        $(this).css('color','hotpink')
        $(this).css('background-color', 'royalblue')
    })

    $('#item3').on('mouseout', function() {
        $(this).css('color','white')
        $(this).css('background-color', '#3498db')
    })

    // 메서드 체인
    // : 하나의 jQuery 객체에 여러 메서드를 연결하는 기술
    $('#item4')
        .on('mouseover', function () {
            $(this).css('color','hotpink')
            $(this).css('background-color', 'royalblue')
        })
        .on('mouseout', function() {
            $(this).css('color','white')
            $(this).css('background-color', '#3498db')
        })

    $('#item5')
        .on('mouseover', function () {
            $(this).css('color','hotpink')
            $(this).css('background-color', 'royalblue')
        })
        .on('mouseout', function() {
            $(this).css('color','white')
            $(this).css('background-color', '#3498db')
        })
        .on('click', function() {
            $(this).css('color','purple')
            $(this).css('background-color', 'cornflowerblue')
        })
        .on('dblclick', function() {
            $(this).css('color','red')
            $(this).css('background-color', 'black')
        })
})