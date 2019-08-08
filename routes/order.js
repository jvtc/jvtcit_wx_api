const Order = require('../model/order');
const User = require('../model/user');

const commit = async (ctx, next) => {
  const { address, tel, content, openid, index } = ctx.request.body;
  console.log(ctx.request.body);
  const order = new Order({
    address,
    tel,
    content,
    openid,
    index: parseInt(index)
  });
  try {
    await order.save();

    const list = await User.find({});
    list.forEach(item => {
      ctx.sendMsg(item.email, ctx.request.body);
    });
    ctx.body = {
      code: 0,
      data: order
    };
  } catch (error) {

    console.log(error);

    ctx.throw(410);
  }
};

const findOrderByOpenid = async (ctx, next) => {
  const { id } = ctx.query;

  try {
    if (!id) {
      throw new Error("参数错误");
    }

    const list = await Order.find({ openid: id });

    ctx.body = {
      code: 0,
      data: list
    };

  } catch (error) {
    console.log(error);
    ctx.throw(410);
  }

};

const list = async (ctx, next) => {

  try {
    const list = await Order.find({});

    ctx.body = {
      code: 0,
      data: list
    };

  } catch (error) {
    console.log(error);
    ctx.throw(410);
  }

};

const distributionOrder = async (ctx, next) => {
  const { id } = ctx.query;

  try {
    if (!id) {
      throw new Error("参数错误");
    }

    Order.update({ openid: id }, {
      status: 1
    });

    ctx.body = {
      code: 0,
      data: list
    };

  } catch (error) {
    console.log(error);
    ctx.throw(410);
  }

};


const finishOrder = async (ctx, next) => {
  const { id } = ctx.query;

  try {
    if (!id) {
      throw new Error("参数错误");
    }

    Order.update({ openid: id }, {
      status: 2
    });

    ctx.body = {
      code: 0,
      data: list
    };

  } catch (error) {
    console.log(error);
    ctx.throw(410);
  }

};

module.exports = {
  commit,
  findOrderByOpenid,
  distributionOrder,
  finishOrder,
  list
};