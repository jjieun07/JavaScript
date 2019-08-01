// 이런 객체가 여러개라면..?
let obj = {
    a:10,
    b:20,
    f1:function() {

    },
    f2:function() {

    },    
}

// 객체를 리턴해주는 함수
function func(a, b) {
    return{
        a:a,
        b:b,
        f1:function() {
            return this.a + this.b            
        },
        f2:function() {
            return this.a - this.b
        },  
    }
}

const ar = []

// 함수가 실행되어 리턴된 객체를 배열에 추가
ar.push(func(10, 20))
ar.push(func(30, 60))
ar.push(func(40, 80))
ar.push(func(50, 70))

console.log(ar);

console.log(ar[1].f1())