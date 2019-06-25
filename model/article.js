const mongoose = require('./db.util');

const Schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // 如果是函数会在创建时执行
  }
});

const Article = mongoose.model('article', Schema)

module.exports = Article;