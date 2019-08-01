// 함수 예제 10

function f1(f2) {
    console.log('f1');
    f2();
}

const f3 = () => {
    console.log('f3');
}

// 함수 리턴
const f4 = () => () => {
    console.log('f4');
}

// 위의 함수 스코프, return 생략 전으로 복구
const f5 = () => {
    return () => {
        console.log('f5');
    }
}

// 객체 리턴 함수
const f6 = n => (n, s) => ({
    // ...(객체)
})

// f7(n) -> (n, s)를 인수로 받는 함수 리턴 -> 함수(n, s) -> 객체 리턴
const f7 = n => (n, s) => ({
    a:10,
    b:'호랑이',
    c:true,
    d:() => {},
    e:{},
})

// 변수로 받아서 인수 전달
f1(f3)

console.log("-----------");

// 직접 코드 전달
f1(() => {
    console.log('???');  
})

console.log("-----------");

f1(f4())

console.log("-----------");

f1(f5())

console.log("-----------");

const obj = f7(100)(200, '독수리')
console.log(obj);
