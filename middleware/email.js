const { host, port, service, secure, user, pass } = require('../config/sms.config')
const nodemailer = require('nodemailer');

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */

const smtpTransport = nodemailer.createTransport({
  host,
  port,
  secure,
  service,
  auth: {
    user,
    pass
  }
});

function templHtml({ content, address, tel }) {
  return `有维修订单。<br/>
  请询问是否有人已经联系了对方，如有请不要重复联系<br/>
  地址：${address}<br/>
  联系方式：${tel}<br/>
  具体问题：${content}<br/>
  `;
}

const sendMsg = async (recipient, data, subject="维修订单") => {

  smtpTransport && smtpTransport.sendMail({
    from: `"计算机技术协会"<${user}>`,
    to: recipient,
    subject: subject,
    html: templHtml(data)
  }, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log('发送成功');
    }
    console.log('发送完成');
  });
}

module.exports = app => {

  app.use(async (ctx, next) => {
    ctx.sendMsg = sendMsg;
    await next();
  });

}