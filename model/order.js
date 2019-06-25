const mongoose = require('./db.util');

const Schema = mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 0
  },
  openid: {
    type: String,
    required: true
  },
  index:{
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // 如果是函数会在创建时执行
  }
});

const Order = mongoose.model('order', Schema);

module.exports = Order;