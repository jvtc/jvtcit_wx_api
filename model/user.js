const mongoose = require('./db.util');

const Schema = mongoose.Schema({
  email:  {
    type: String,
    required: true,
    unique:true,
  }
});

const User = mongoose.model('user', Schema);

module.exports = User;