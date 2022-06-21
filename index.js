const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000 || process.env.PORT;
const cors = require("cors");

//connect mongoDb Atlas
const connect = require("./config/db");
connect;

//Midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/pictures", express.static(path.join(__dirname, "pictures")));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hei welcome in APi amo");
});

//allRouter
const allRouter = require("./routes/index");
app.use(allRouter);

app.listen(PORT, () => console.log("server is Okey"));
