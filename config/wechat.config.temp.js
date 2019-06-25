// https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
/**
 * 微信小程序配置模版
 */
const wechat = {
  APPID: "",
  JSCODE: "",
  secret: "",
  grant_type: 'authorization_code'
};

module.exports = wechat;