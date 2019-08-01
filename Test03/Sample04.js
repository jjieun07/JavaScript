const obj1 = {
    a:1,
    b:2,
    c:3,
}

// const이기 때문에 객체 변경 불가
/*
 obj1 = {

}
*/

console.log(obj1);

// Object.defindProperty(객체, "속성이름", 속성 값)
// Object.defindProperties(객체, {속성1 : {}, 속성2 : {}}})
obj1.a = 10
console.log(obj1);

// enumerable _ 속성 열거 가능한가
// Object.defineProperty(obj1, "a", {
//     enumerable : false
// })

////???????????????? 왜 바뀌나여,,.
Object.defineProperty(obj1, "a", {
    configurable : false
})

obj1.a = 40
console.log(obj1);

// Object.freeze()
// 객체 동결 (객체에 포함된 전체 속성 포함 객체 자체 변경 불가)
Object.freeze(obj1)