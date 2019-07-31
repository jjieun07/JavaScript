// 배열 예제

// 배열 객체 (여러가지 타입을 넣어도 됨)
let ar = [10, '문자열', true, {}]

// 일반적으로 사용하는 방법
for(let i = 0; i < ar.length; i++) {
    console.log(ar[i])
}

console.log("--------------------");

// for-in
for(let item in ar) {
    // item - index값
    console.log(item, ar[item]);
}

console.log("--------------------");

// forEach
// 람다식 사용 가능
ar.forEach((v, k) => {
    console.log(k, v);
});