const Koa = require('Koa')
const app = new Koa();
const Router = require('Koa-router')
const router = new Router();

//*****************************************************//
// todo


//*****************************************************//

app.use(router.routes()).use(router.allowedMethods())
app.listen(4000, () => {console.log('listen');})