const Router = require('koa-router');
const router = new Router();

// 导入 路由项目
const order = require('../routes/order');
const article = require('../routes/article');
const sns = require('../routes/sns');
const user = require('../routes/user');

router.post('/order/commit', order.commit);
router.get('/order/findByOpenid', order.findOrderByOpenid);
router.get('/order/distribution', order.distributionOrder);
router.get('/order/finish', order.finishOrder);
router.get('/order/list', order.list);

router.post('/jscode2session', sns.jscode2session);

router.get('/article/list', article.list);
router.post('/article/create', article.createArticle);
router.get('/article/findById', article.findById);

router.get('/user/addEmail', user.addEmail);

module.exports = (options) => {
  return router;
};