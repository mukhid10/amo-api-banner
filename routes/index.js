const express = require("express");
const router = express.Router();

const userRouter = require("./users.route");
const bannerRouter = require("./banner.route");

router.use("/users", userRouter);
router.use("/banner", bannerRouter);

module.exports = router;
