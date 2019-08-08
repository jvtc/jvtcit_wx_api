const User = require('../model/user');


const addEmail = async (ctx, next) => {
  const { email } = ctx.query;
  const res = {};
  // 验证
  if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)){
    res.errmsg = "格式错误";
    res.errcode = -1;
  }

  const user = new User({email});
  await user.save();
  res.errmsg = "添加成功";
  ctx.body = {
    code: res.errcode || 0,
    errmsg: res.errmsg
  };

}

module.exports = {
  addEmail
}