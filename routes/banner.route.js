const express = require("express");
const router = express.Router();
const multer = require("multer");

//Multer
const { fileStorage, fileFilter } = require("../config/multer");

const {
  getAll,
  getById,
  addBanner,
  updateById,
  deleteById,
} = require("../controllers/banner.controller");

const authJWT = require("../auth");
router.use(authJWT);

router.get("/", getAll);
router.get("/:id", getById);
router.post(
  "/",
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
  addBanner
);
router.put(
  "/:id",
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
  updateById
);
router.delete("/:id", deleteById);

module.exports = router;
