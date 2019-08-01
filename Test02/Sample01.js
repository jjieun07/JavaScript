// 함수 예제 1

// 함수 형식 1
// 호이스팅 가능 (함수 선언 전 호출 가능?)
f1()

function f1() {
    console.log("f1")
}
f1()

// 함수 형식 2
// 호이스팅 불가능
//f2()

// 함수는 대부분 코드 수정이 일어나지 않으므로 let사용 잘 안함 (const 사용)
const f2 = function() {
    console.log("f2")
}

f2()

// 함수 형식 3
// 에로우 함수
const f3 = () => console.log("f3")
f3()


// 함수 형식 4
// 객체 생성
const obj = {
    f4:() => {}
}

console.log('=======class 생성========')

// 클래스 사용 가능 _ ES6부터 지원
class Apple {
    // 생성자
   // constructor() {}

    // 클래스 내에서 function f1(){} 성립안됨
    // 클래스 내에서 함수를 선언 할 때 타입을 붙이면 에러
    f2 = function() {
        console.log("Apple.f2")
    }

    f3 = () => {
        console.log('Apple.f3')
    }
}

let apple = new Apple()
apple.f2()
apple.f3()