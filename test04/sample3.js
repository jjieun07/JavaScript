function f1(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*n)
        //인수전달 _ 전달된 인수는 then()의 함수의 인수로 전달(t1)
        r1('호랑이')
    })
}

function f2(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*n)
        r1(1)
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

function f4(n) {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log(n);
        }, 1000*n)
        r1()
    })
}

f1(1)
.then((t1) => f2(t1))
.then((t2) => f3(t2))
.then(() => f4(4))