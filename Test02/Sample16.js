// 비구조화 할당 예제

// 객체
let obj = {
    name:'홍길동',
    age:100,
}

// let name = obj.name
// let age = obj.age


// ES6에서 추가
// 비구조화 할당
// 객체의 변수명과 같으면 대입
// 순서 바꿔도 됨 _ 동일한 이름의 변수를 찾아서 대입
//const {age, name} = obj

const {name, age} = obj
console.log(name, age);

// 한개만 할당 가능
//const {name} = obj
//console.log(name);

function f1(obj) {
    const {name, age} = obj
    console.log(name, age);
}

f1(obj)


// 배열
const ar = [10, 20, 30]
// 순서대로 대입
const [t1, t2, t3] = ar
console.log(t1, t2, t3);