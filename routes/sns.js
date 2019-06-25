const sns = require('../middleware/sns');
const wechatConfig = require('../config/wechat.config');
const jscode2session_get = sns(wechatConfig);


const jscode2session = async (ctx, next) => {
  const { code } = ctx.request.body;
  const res = await jscode2session_get(code);

  ctx.body = {
    code: res.errcode || 0,
    data: {
      openid: res.openid,
    },
    errmsg: res.errmsg
  };

}

module.exports = {
  jscode2session
}