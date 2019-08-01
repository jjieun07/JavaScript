//prompt

function f1() {
    console.log('f1');
    console.log(arguments)

    for(let i = 0; i < arguments.length; i++) {
        console.log(i, arguments[i])
    }
}
f1()
// 가변인수의 있을 경우 js에서는 예약된 '객체' arguments 가 인수 값을 전달 받음(에로우 함수에서는 불가)
f1(10, 20)
