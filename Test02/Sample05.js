// 함수 예제 5

// 객체 리턴
const f1 = () => {
    // n은 객체
    let n = {
        a:10,
        b:20,
    }
    return n
}

const f2 = () => {
    // 단문장으로 인식
    return {
        a:10,
        b:20,
    }
}

// {return } 이 생략된 모습 (스코프 앞에 () 추가)
const f3 = () => ({
    a:10,
    b:20,
})

// {return } 추가
const f4 = () => {
    return ({
       a:10,
       b:20,
    })
}

// {return } 생략
const f5 = () =>
    ({
        a: 10,
        b: 20,
    })


// 객체 리턴 모양
//const f6 = () => ({})

// 함수 복구 (단문장일 경우에는 생략이 가능하지만 코드를 추가 시켰을때는 다시 스코프, return 필요)
const f6 = () => {
    console.log("f6");
    // 객체
    return ({
        //...
    })   
}
f6()