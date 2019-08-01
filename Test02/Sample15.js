// with 문법 예제

let obj = {
    a:10,
    b:'호랑이'
}

console.log(obj.a, obj.b);
console.log(obj['a'], obj['b']);

// 스코프 안에서 obj를 생략하여 사용 가능
// 스코프 안에서의 변수는 obj의 변수로 인식
with(obj) {
    console.log(a, b);
}