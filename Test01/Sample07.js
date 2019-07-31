// Object 예제

let obj = {
    a:10,
    b:"a",
    c:true,
}

// 객체의 요소 접근 방법
// 두가지 모두 자주 사용
console.log(obj.a)
console.log(obj['b'])

console.log("----------------")

for(let item in obj){
    // key값 출력
    console.log(item)
    // 값 출력
    console.log(obj[item])
}
