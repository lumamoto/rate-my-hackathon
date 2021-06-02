const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ""
  },
});

module.exports.UserSchema = UserSchema;
module.exports = User = mongoose.model("user", UserSchema);