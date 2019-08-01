
// 객체를 만들어주는 함수 = 생성자 함수 (객체를 리턴해주는 것이 목적) _ return 해주는 것보다 선호
function f(n, k, e) {
    //'this.n' -> n은 지금 만들어진거, '= n' -> 인수
    this.n = n
    this.k = k
    this.e = e
    this.s = function() {

    }
    this.output = function() {

    }
}

// function 객체
const obj = new f('고양이', 30, 20)
// const obj2 = new f('고양이', 30, 20)
// const obj3 = new f('고양이', 30, 20)

console.log(obj);
console.log('-------------------------------------------------------------------');


const ar = []

ar.push(new f('고양이', 30, 40))
ar.push(new f('강아지', 50, 10))
ar.push(new f('거북이', 90, 60))

console.log(ar);
console.log('-------------------------------------------------------------------');

for(let i = 0; i < ar.length; i++) {
    console.log(ar[i].n, ar[i].k, ar[i].e)
}