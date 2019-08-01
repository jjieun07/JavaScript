
let obj0 = {
    // 자기자신 안에 들어있는 속성을 제어할 때 반드시 this.속성명
    // 함수 속성 - 에로우 함수 안됨,,,, 왜인지는 모른다요..
    name:'호랑이', age:23, salary:250, //getSum:function() {return this.age+this.salary}
}

let obj1 = {
    name:'강아지', age:24, salary:230,
}

let obj2 = {
    name:'고양이', age:22, salary:200,
}

let obj3 = {
    name:'코끼리', age:30, salary:300,
}

let obj4 = {
    name:'독수리', age:26, salary:280,
}

let ar = []

ar.push(obj0)
ar.push(obj1)
ar.push(obj2)
ar.push(obj3)
ar.push(obj4)

console.log(ar);
/*
// 새로운 속성...
ar[0].sum = ar[0].age + ar[0].salary

console.log(ar[0]); 
*/

// 객체가 age와 salary를 더해주는 함수를 가지고 있다면...?
//ar[0].sum = ar[0].getSum()
//console.log(ar[0]);


// 함수 동적 추가
for(let i = 0; i < ar.length; i++) {
    ar[i].getSum = function() {return this.age+this.salary}
    ar[i].sum = ar[i].getSum()
}

console.log(ar);


// with
// 안된다요_with에서 속성 동적 추가 안됨?
/* 
for (let i = 0; i < ar.length; i++) {
    with (ar[i]) {
        getSum = function () { return this.age + this.salary }
        sum = getSum()
    }
}

console.log(ar); 
*/

// this
let obj = {
    a:10,
    f1:function() {
        console.log('f1');
        console.log(this.a);
    },
    f2:function() {
        this.f1();
    },
}

obj.f1()
obj.f2()