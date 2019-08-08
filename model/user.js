const mongoose = require('./db.util');

const Schema = mongoose.Schema({
  email: String
});

const User = mongoose.model('user', Schema);

module.exports = User;