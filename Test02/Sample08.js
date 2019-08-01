// 함수 예제 8

const f1 = () => {
    return () => {

    }
}

// 위의 함수에서 스코프, return 생략
const f2 = () => (() => {})


const f3 = (n1) => ((n2) => {
    console.log('f3', n1, n2);
})
f3(100)(200)


// return이 없기 때문에 스코프 생략 ㄴㄴ
// 객체 리턴 시 -> () 생략 불가
// 함수 리턴 시 -> () 생략 가능
const f4 = n1 => n2 => {
    console.log('f1');
}
f4(100)(200)


////********************* */////
const f4 = () => {
    const f5 = () => {

    }
}



const f4 = (n1) => {
    const f5 = (n2) => {
        
    }
}



const f4 = (n1) => {
    return (n2) => {
        
    }
}


const f4 = n1 => {
    return n2 => {
        
    }
}


const f4 = n1 => n2 => {
        console.log(n1, n2);    
    }

f4(100)(200)