//

function f1(a, b) {
    console.log(a, b);
}
// 전달받은 인수가 때문에 undefined
f1()

// 전달받은 인수가 한개이기 때문에 한개만 undefined
f1(10)


f1(10, 20)

// 전달받는 인수 개수보다 많으면 이후의 인수 무시
f1(10, 20, 30)

console.log("---------------------------");

// 인수를 전달하지 않으면 a는 디폴트로 10 적용
function f2(a = 10, b, c = 99) {
    console.log(a, b, c);
}

f2()
f2(20, 30, 40)

console.log("---------------------------");

function f3(f = () => {console.log('코끼리');}) {
    // 함수가 전달되지 않으면 디폴트 함수 실행
    f()
}

f3()
f3(() => {
    console.log('호랑이');
})

console.log("---------------------------");

function f4(f) {
    console.log('f4');      
    console.log(f)
}

function f5() {
    console.log('f5')
}

function f6() {
    console.log('f6');
    return 100
}

// 함수 코드 자체를 넘기는 것 (인수전달 있는 것)
console.log("------------f4(f5)---------------");
f4(f5)

// f5를 call (인수전달 없는 것) 
// 인수 전달이 없으므로 undefined
// 위의 코드와는 해석자체가 다름
console.log("-----------f4(f5())----------------");
f4(f5())

// ???????????????
console.log("---------f4(f6())------------------");
console.log(f4(f6()))


console.log("---------------------------");

// 객체 리턴
function f7() {
    console.log('f7');
    return {}
}


// 함수 리턴
function f8() {
    console.log('f8');
    return f7
}

// f7에서 리턴되는 객체? 리턴
function f9(){
    console.log('f9');
    return f7()
}


console.log(f7())
console.log("---------------------------");

console.log(f8())
console.log("---------------------------");

console.log(f9())
console.log("---------------------------");