const mongoose = require("mongoose");
require("dotenv").config();

const connect = mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("success connect mongoDb atlas"))
  .catch((err) => console.log(err));

module.exports = connect;
