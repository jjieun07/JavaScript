// 객체선언
let obj = {
    a:10,
    b:20,
}

console.log('------<obj>-----');
console.log(obj);
console.log()

obj.a = 30

console.log('------obj.a = 30-----');
console.log(obj);
console.log()

// 객체의 동적 속성 추가 (편하지만 위험..)
obj.c = 30

console.log('------obj.c = 30-----');
console.log(obj);
console.log()

// 동적 속성 제거
delete(obj.b)

console.log('------delete(obj.b)-----');
console.log(obj);
console.log()