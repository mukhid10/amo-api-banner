const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

const bannerModels = mongoose.model("banner", bannerSchema);
module.exports = bannerModels;
