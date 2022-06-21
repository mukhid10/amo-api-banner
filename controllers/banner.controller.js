const Banner = require("../models/banner.models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Banner.find();

      res.json({
        message: "get all success",
        category: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await Banner.findById(req.params.id);

      res.json({
        msg: "success get data by ID",
        category: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getByUserId: async (req, res) => {
    try {
      const data = await Banner.find({
        userId: req.body.userId,
      });
      res.status(200).json({
        msg: "success get data by userID",
        products: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  addBanner: async (req, res) => {
    try {
      const { userId, name, category } = req.body;
      const image = req.file.path;

      await Banner.create({
        userId: userId,
        name: name,
        category: category,
        image: `http://localhost:5000/${image}`,
      });

      res.json({
        msg: "succes add Category",
      });
    } catch (error) {
      console.error(error);
    }
  },

  updateById: async (req, res) => {
    try {
      const { userId, name, category } = req.body;
      const image = req.file.path;
      await Banner.updateOne(
        { _id: req.params.id },
        {
          $set: {
            userId: userId,
            name: name,
            category: category,
            image: `http://localhost:5000/${image}`,
          },
        }
      );

      res.json({
        msg: "success update",
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteById: async (req, res) => {
    try {
      await Banner.deleteOne({ _id: req.params.id });

      res.json({
        msg: "delete success",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
