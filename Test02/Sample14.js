//setTimeout 함수

// 함수를 실행시킨 주체가 함수가 실행완료 됬는지 확인 안하면 비동기
// 함수를 실행시킨 주체가 함수가 실행완료 됬는지 확인하면 동기

const f1 = () => {
    console.log('f1');
}


// 3000 -> ms -> 3초
// 비동기 non-blocking 함수
// non-blocking 함수이기 때문에 setTimeout() 함수를 실행시킨 후 끝날 때까지 기다리지 않고 계속 진행 -> 3초 기다리는 동안 f1 실행
setTimeout(()=>{
    console.log('hr');
}, 3000)

f1()