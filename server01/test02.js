//get - 데이터 요청
//post - 데이터 추가/갱신


// // npm install koa-router

// const Koa = require('Koa')
// const app = new Koa();

// const Router = require('Koa-router')
// const router = new Router();

// // router 경로 지정
// router.get('/', (ctx) => {
//     console.log('소나무');
// })

// app.use(router.routes()).use(router.allowedMethods())
// app.listen(4000, () => {console.log('listen');}) */

//*****************************************************//

const Koa = require('Koa')
const app = new Koa();

const Router = require('Koa-router')
const router = new Router();

// router 경로 지정
router.get('/', (ctx) => {
    console.log('소나무');
})

router.get('/app', (ctx) => {
    console.log('중나무');
})


// router.get('/bpp', (ctx) => {
//     console.log('대나무');
// })


// /bpp/여기저는거 -> name에 여기적는거 들어감
// /bpp 만 넣으면 라우팅 안됨
// router.get('/bpp/:name', (ctx) => {
//     console.log(ctx.params.name);

//     const { name } = ctx.params
//     console.log(name)
// })


// /bpp/:name? -> ?를 넣으면 주소뒤에 데이터를 전달하든 안하든 이 주소로 라우팅됨
router.get('/bpp/:name?', (ctx) => {
    console.log(ctx.params.name);

    const { name } = ctx.params
    console.log(name)
})


// /cpp/?name=ㅇㅇ&age=30
router.get('/cpp', (ctx) => {
    console.log('뭐하지');

    // query의 데이터 가져옴
    const {name, age} = ctx.query
    console.log(name, age);
    
})


// 위의 2가지 방법 합체!!
router.get('/dpp/:bird', (ctx) => {
    console.log('뭐하지');

    // query의 데이터 가져옴
    const {bird} = ctx.params;
    console.log(bird);
    
    const {name, age} = ctx.query
    console.log(name, age);

    // 전달받은 데이터 화면에 출력
    ctx.body = '<h1>bird = ' + bird + '</h1>'
    ctx.body += '<h1> name = ' + name + ' age = ' + age + '</h1>'
})


app.use(router.routes()).use(router.allowedMethods())
app.listen(4000, () => {console.log('listen');})