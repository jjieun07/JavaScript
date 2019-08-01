// 배열

let ar = [3, 4, 1, 2]
let ar1 = [-3, -4, 1, 2]
// 객체 배열
let ar2 = [{m:'박',a:10,}, {m:'김',a:5,}, {m:'최',a:15,}]

console.log(ar.length);

ar.sort()
console.log("-----sort-----")
console.log(ar)

// 정렬 기준 바꿈
ar.sort(function (a, b) {
    // 내림차순
    return b-a
    // 오름차순
    // return a-b
})

console.log("-----sort(내림차순)-----")
console.log(ar)

// 절대값 오름차순
ar1.sort(function (a, b) {
    let x = Math.abs(a)
    let y = Math.abs(b)
    return x-y
})

console.log("-----절대값 기준sort-----")
console.log(ar1);

// 객체 정렬
ar2.sort(function (obj1, obj2) {
    return obj1.a - obj2.a
})

console.log("-----객체(속성a기준)sort-----")
console.log(ar2);

// 문자열 정렬 - 안됨
ar2.sort(function (obj1, obj2) {
    return obj1.m - obj2.m
})

console.log("-----객체(속성m기준)sort-----")
console.log(ar2);

// 문자열 연산 지원 ㄴㄴ
console.log(ar2[0].m, ar2[1].m, ar2[0].m-ar2[1].m)