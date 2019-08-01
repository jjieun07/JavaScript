//  함수 예제 2
//  함수 오버로딩 불가능 

//-----------------Sample01.js 함수 1-----------------//
// 인수 전달 ㄴㄴ 리턴 값 ㄴㄴ
function f1() {
    console.log("f1")
    
}
f1()

// 인수 전달 ㅇㅇ 리턴 값 ㄴㄴ
// 타입에 무의미하기 때문에 인수 전달시 let 안붙임 (let a, let b)-> ㄴㄴ
function f2(a, b) {
    console.log(a, b)
    console.log(typeof(a), typeof(b));  
}
f2(10, '호랑이')

// 인수 전달 ㄴㄴ 리턴 값 ㅇㅇ
// 함수 원형만 보고는 리턴 값이 있는지 판단할 수 없음
function f3() {
    console.log("f3")
    return 100
}
// 함수 사용 1
let num = f3()
console.log(num);

// 함수 사용 2
console.log(f3())

// 인수 전달 ㅇㅇ 리턴 값 ㅇㅇ
function f4(n, s) {
    console.log('f4');
    return n + s
}
console.log(f4(10, '호랑이'));