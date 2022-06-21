const multer = require("multer");

//Multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "pictures");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = { fileStorage, fileFilter };
