// 복습

// setTimeout(() => {
//     console.log(1)
// }, 2000)

// setTimeout(() => {
//     console.log(2)
// }, 1000)



// function f1() {
//     setTimeout(() => {
//         console.log(1)
//     }, 2000)
// }

// function f2() {
//     setTimeout(() => {
//         console.log(2)
//     }, 1000)
// }

// // function f3() {
// //     f1()
// //     f2()
// // }

// // 즉시 실행함수
// (function f3() {
//     f1()
//     f2()
// })()



// function f1() {
//     return new Promise((r1, r2) => {
//         setTimeout(() => {
//             console.log(1)
//             r1()
//         }, 2000)
//     })
// }

// function f2() {
//     return new Promise((r1, r2) => {
//         setTimeout(() => {
//             console.log(2)
//             r1()
//         }, 1000)
//     })
// }

// (function f3() {
//     f1().then(() => f2())
// })()