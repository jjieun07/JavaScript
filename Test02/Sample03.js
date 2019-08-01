// 함수 예제 3
//-----------------Sample01.js 함수 3-----------------//

// 인수 전달 ㄴㄴ 리턴 값 ㄴㄴ

// const f1 = () => console.log("f1")
// console.log(f1())   // undefined -> 스코프 제거 = 문장 리턴 -> consloe.log()는 타입이 없으므로 리턴시 undefined가 넘어감

const f1 = () => {console.log("f1")}
f1()

// 인수 전달 ㅇㅇ 리턴 값 ㄴㄴ
const f2 = (n, s) => {console.log(n, s)}
f2(10, '호랑이')

// 인수 전달 ㄴㄴ 리턴 값 ㅇㅇ
const f3 = () => 100
console.log(f3())

// 인수 전달 ㅇㅇ 리턴 값 ㅇㅇ
const f4 = (n, s) => n + s
console.log(f4(20, '사자'))