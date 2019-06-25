const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const routerFn = require('./middleware/router');
const router = routerFn();
const errMap = require('./config/errorMsg.config');
const app = new Koa();

const PORT = 1277;
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = {
      code: error.status,
      message: errMap.get(error.status)
    };
  }
});
app.use(bodyparser({
  extendTypes: {
    json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
  }
}));
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log("启动成功：http://127.0.0.1:" + PORT);
});