// typeof 예제2

let a = 10;

console.log(typeof(a));
console.log(typeof('a'));
console.log(typeof(true));

// 변수가 가지고 있는 값이 없기 때문에 undefined
let b;
console.log(typeof(b));     

let c = new Date();
console.log(c, typeof(c));

// [] - 배열 나타냄 (배열은 무조건 Object) 배열 타입이 존재하지는 않는다.
let d = [];
console.log(typeof(d));

// {} - 함수 / 객체 *****중요!!*****
let e = {};
console.log(typeof(e));

// ****너무 중요**** //
let Apple = {
    a:10,           // a = 10 ㄴㄴ
    b:'호랑이',     // 마지막에 , 를 넣는 습관을 들이자 (추가시 편함)
    c:true,
    // 객체 안에 객체 생성
    d:{
        e:20,
    },
    f:function() {
        console.log(30);
    }
};

console.log(Apple.a);
console.log(Apple.b);
console.log(Apple.c);
console.log(Apple.d);
console.log(Apple.d.e);
console.log(Apple.f, typeof(Apple.f));
Apple.f()
//console.log(Apple.f())    // 이렇게 쓰지 마세요

// type 종류

// number
// string   (문자 타입은 없음)
// boolean
// object
// function
// undefind