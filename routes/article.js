const Article = require('../model/article');

const list = async (ctx, next) => {
  const { page } = ctx.query;

  const index = parseInt(page) || 1;
  const list = await Article.find({}).skip((index - 1) * 15).limit(15);

  ctx.body = {
    code: 0,
    data: list,
    total: await Article.countDocuments({})
  };

};
const findById = async (ctx, next) => {
  const { id } = ctx.query;

  const data = await Article.findById(id);

  ctx.body = {
    code: 0,
    data: data,
  };

};

const createArticle = async (ctx, next) => {
  const { title, content } = ctx.request.body;

  try {
    if (!title || !content) {
      throw new Error("参数错误");
    }
    const article = new Article({
      title,
      content
    });
    await article.save();

    ctx.body = {
      code: 0,
      data: article.toJSON()
    };

  } catch (error) {

    console.log(error);
    ctx.throw(410);

  }
};


module.exports = {
  list,
  createArticle,findById
};