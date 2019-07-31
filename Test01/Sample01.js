/////// js는 원래 ; 생략하여 작성하는 것   (써도 상관은 없음...)

// console 예제
// 웹에서는 alert(경고창) 있음. console은 디버깅 창에서 볼 때 사용
console.log(1);    
console.log('문자열');
console.log('호랑이' + 100);     // -> 자바에서 사용하는 문법(문자열 여러개 확인 시 + 사용) 왠만하면 ㄴㄴ
console.log('호랑이', 100);      // ,로 이으면 스페이스 포함 (위의 방법보다 이 방법을 권장)

// console.log(숫자, 문자열)로 작성하여 실행순서 구분
console.log(1, "?????");
console.log(2, "!!!!!");