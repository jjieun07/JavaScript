// 함수 예제 7

const f1 = () => {
    console.log('f1');
    
    const f2 = (n, s) => {
        console.log('f2', n, s);     
    }
    return f2
}
f1()(10, '호랑이')