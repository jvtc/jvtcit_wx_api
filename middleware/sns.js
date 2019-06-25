const request = require('request');
const config = {
  APPID: "",
  secret: "",
  grant_type: ""
};

const jscode2session = async (jscode) => {

  return new Promise(function (resolve, reject) {
    const { APPID, secret, grant_type } = config;
    request.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${secret}&js_code=${jscode}&grant_type=${grant_type}`, function (err, res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });

}

module.exports = options => {

  const { APPID, secret, grant_type } = options;
  config.APPID = APPID;
  config.secret = secret;
  config.grant_type = grant_type;

  return jscode2session;

}