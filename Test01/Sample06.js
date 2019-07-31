// Date() 예제

let n = new Date()
console.log(n.getFullYear());

// getMonth() -> 현재 달 - 1 로 나옴
console.log(n.getMonth())

console.log(n.getDate())

// getDay() -> 0 = 일요일
console.log(n.getDay())

console.log(n.getHours())

console.log(n.getMinutes())

console.log(n.getSeconds())

console.log(n.getTime())    // Date object가 1970년 1월 1일 00:00:00 GMT 부터 몇 밀리초가 지났는가

console.log()
console.log("오늘은", n.getFullYear(), "년", n.getMonth()+1, "월", n.getDate(), "일")
console.log(n.getHours(), "시", n.getMinutes() , "분", n.getSeconds(), "초 입니다.");