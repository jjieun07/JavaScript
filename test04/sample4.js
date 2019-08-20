// function f1(n) {
//     return new Promise((r1, r2) => {
//         setTimeout(() => {
//             console.log(n);
//         }, 1000*n)
//         if(n === 'id')
//             r1(123456);
//         // else 
//         //     r2()
//     })
// }

// function f2(n) {
//     return new Promise((r1, r2) => {
//         setTimeout(() => {
//             console.log(n);
//         }, 1000*n)
//         r1()
//         // r2()
//     })
// }

// function f3(n) {
//     return new Promise((r1, r2) => {
//         setTimeout(() => {
//             console.log(n);
//         }, 1000*n)
//         r1()
//     })
// }

// function f4(n) {
//     return new Promise((r1, r2) => {
//         setTimeout(() => {
//             console.log(n);
//         }, 1000*n)
//         r1()
//     })
// }

// function f5(n) {
//     console.log('실패'); 
// }

// f1('id')
// .then((aud) => f2(aud))
// .then((t2) => f3(t2))
// .then(() => f4(4))
// // .catch(() => f5)




function f1(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*1)
        if(n === 'id')
            r1(123456)
        else r2()
    })
}

function f2(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*2)
        r1()
    })
}

function f3(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*3)
        r1()
    })
}

function f4(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*n)
        r1()
    })
}

function f5() {
    console.log("실패");
}

f1("idd")
.then((aud) => f2(aud))
.then(() => f3(3))
.then(() => f4(4))
.catch(f5)