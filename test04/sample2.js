//step1

// new Promise((r1, r2) => {
//     console.log(1);
//     r1()
// })
// .then(() =>{
//     console.log(2);
//     new Promise((r1, r2) => {
//         console.log(3);
//         r1()
//     })
//     .then(() => {console.log(4);
//     })
// })


//step2 _ new Promise를 return 시키면서 then을 밖으로 뺌 -> 코드 깊이 그대로
// new Promise((r1, r2) => {
//     console.log(1);
//     r1()
// })
// .then(() =>{
//     console.log(2);
//     return new Promise((r1, r2) => {
//         console.log(3);
//         r1()
//     })
// })
// .then(() => {
//     console.log(4);
//     return new Promise((r1, r2) => {
//         console.log(5);
//         r1()
//     })
// })
// .then(() => {
//     console.log(6);
// })


//step3
// function f1() {
//     return new Promise((r1, r2) => {
//         r1()
//     })
// }

// f1()
// .then(() =>{
//     console.log(2);
//     return f1()
// })
// .then(() => {
//     console.log(4);
//     return f1()
// })
// .then(() => {
//     console.log(6);
// })


//step4
// function f1() {
//     return new Promise((r1, r2) => {
//         r1()
//     })
// }

// f1()
// .then(() => f1())
// .then(() => f1())
// .then(() => f1())


//step5 _ step1의 모양에서 최종 정리된 모양
// function f1(n) {
//     return new Promise((r1, r2) => {
//         setTimeout(() => {
//             console.log(n);
//         }, 1000*n)
//         r1()
//     })
// }

// f1(1)
// .then(() => f1(2))
// .then(() => f1(3))
// .then(() => f1(4))


//
function f1(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*n)
        r1()
    })
}

function f2(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*n)
        r1()
    })
}

function f3(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*n)
        r1()
    })
}

f1(1)
.then(() => f1(2))
.then(() => f2(3))
.then(() => f3(4))

// 기본적으로 new promise는 리터값이 있음
//  axios함수 = f1()?