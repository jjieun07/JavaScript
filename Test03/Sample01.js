//

// 함수 오버로딩 안됨
function f1() {
    console.log('f1_1');
}

function f1(a) {
    console.log('f1_2');
}

function f1(a, b) {
    console.log('f1_3');
}

// 동일한 이름의 함수가 여러개일 경우 이전의 함수는 컴파일 ㄴㄴ 마지막 함수만 살아남음
f1()
f1(10)
f1(10, 20)
