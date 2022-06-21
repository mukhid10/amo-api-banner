const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birtday: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const usersModels = mongoose.model("users", usersSchema);
module.exports = usersModels;
