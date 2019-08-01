// 함수 예제 6

const f1 = () => {
    console.log('f1');

    const f2 = () => {
        console.log('f2')
    }
    // return f2() -> f2실행 후 f2의 리턴 값을 리턴
    return f2;
}

const f3 = f1()
f3()

// f1() 의 리턴 값이 f2이므로 ()를 연속해서 붙여 주면 f2실행
// f1()() -> f2()
f1()()