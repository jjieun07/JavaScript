// 동기/비동기


// async - 비동기
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
//     f1()
//     .then(() => f2())
// })()
   

//-------------------------------------------------------------//
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

// (async function f3() {
//     await f1()
//     .then(() => f2())
//     .catch(() => { console.log("?") })
// })()

// // (async function f4() {
// //     await f1()
// //     await f2()
// // })()




//-------------------------------------------------------------//


const f1 = () => new Promise((r1, r2) => {
    setTimeout(() => {
        console.log(1)
        r1()
    }, 2000)
})


function f2() {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(2)
            r2()
        }, 1000)
    })
}

//f3 -> 비동기 함수 (async)
(async function f3 () {
    // await -> 동기화
    await f1()
    .then(() => f2())
    .catch(() => {console.log('실패');
    })
})()