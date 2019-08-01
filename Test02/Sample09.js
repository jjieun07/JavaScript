// 함수 예제 9

// 이 함수가 리턴이 되면...?
// 함수 안에 함수가 들어가있음 (모든 language에서 이 문법은 문제 but js는 지역변수가 사용될 가능성이 있으면 함수가 끝난 뒤에도 지역변수의 제거를 보류)
// 지역변수 생명연장됨 -> 클로저
// ********함수간에 지역변수 공유!!**********

let f1 = function() {
    // 원래라면 f2가 리턴되면서 f1이 종료되므로 지역변수인 num은 외부에서 사용불가
    let num = 10;

    let f2 = function() {
        let string = '호랑이'
        console.log(string);
        console.log(num);        
    }
    return f2
}

f1()()