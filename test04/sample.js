//ex1 setTimeout _ non-Blocking, 비동기 함수

// setTimeout(function() {console.log("1");
// }, 1000)
// console.log(2);


//ex2
// 호랑이 -> a로 30 -> b로 인수 전달
// 40은 전달되지만 받는 인수가 없음, arguments에는 포함되어있음

// setTimeout(function(a, b) {
//     console.log("1");
//     console.log(a, b)
//     console.log(arguments[0], arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments.length);
// }, 1000, '호랑이', 30, 40)
// console.log(2);


//ex3

// setTimeout(function(...args) {
//     console.log("1");
//     console.log(args[0], args[1]);
//     console.log(args.length);
// }, 1000, '호랑이', 30, 40)
// console.log(2);


//ex4
// 익명함수를 사용할 때는 (a, b), arguments로 인수를 전달할 수 없음
// ...args는 인수전달 가능

// setTimeout((...args) => {
//     console.log("1");
//     console.log(args[0], args[1]);
//     console.log(args.length);
// }, 1000, '호랑이', 30, 40)
// console.log(2);


//ex5_콜백지옥

// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//         }, 1000)
//     }, 1000)
// }, 1000)
// console.log(3);


//ex6
//setTimeout이 실행되기 전에 for문이 끝남

// for(var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }


//ex7
// 함수를 만들자만자 사용하는 함수 - 즉시 실행함수 (IIFE?)

// (function f1(a, b)  {
//     console.log("F1"); 
// })(10, 20)


//ex8_즉시 실행 함수

// for(var i = 0; i < 3; i++) {
//      ((ii) => {
//         setTimeout(() => {
//             console.log(ii);
//         }, 1000 * (ii + 1))
//     })(i)
// }


//ex9 _ 즉시실행 함수처럼 실행
// for(let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }


//ex10 _ new promise?
// new promise-then-catch
// ok/ng 발생 (ok -> then으로 감, ng -> catch로 감) 
// new Promise -> 생성자 함수
// new Promise(() => {

// })
// .then(() =>{})
// .catch(() => {})

// 생성자 함수?
// function Apple() {}
// Apple();

// const apple = new Apple();

//ex11
// 전달받은 생성자 인수(함수)는 내부에서 자동으로 호출 시킨다
// new Promise(() => {
//     console.log('promise');
// })


//ex12
// new Promise(() => {
//         setTimeout(() => {
//             console.log(1);
//         }, 1000)
//     })


//ex13
//함수 전달 할때 r1(resolve) - 해결? , r2(reject) - 거절
// new Promise((r1, r2) => {
//     console.log('1');
//     // r1()
//     r2()
// })
// .then(() =>{console.log('then');
// })
// .catch(() => {'catch'})


// new Promise((r1, r2) => {
//     console.log('1');
//     setTimeout(() => {
//         console.log('setimeout');
//     }, 1000) 
//     r1()
//     // r2()
// })
// .then(() =>{console.log('then');
// })
// .catch(() => {'catch'})