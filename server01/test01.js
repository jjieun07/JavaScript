//koa를 이용한 node.js 서버 작동

// package.json 파일 필요 -> npm install init
// koa설치 -> npm install koa

const Koa = require('Koa')

// koa객체 생성
const app = new Koa();

app.use((ctx) => {
    console.log('토끼');
    ctx.body ='<h1>hello world</h1>'
})
app.listen(4000, () => {console.log('listen');})

//nodemon 설치 -> 파일 수정 -> 서버 자동 재시작