const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const path = require("path");

const app = express();
require("dotenv").config();

var corsOptions = {
  origin: "*",
};
//common middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/media", express.static(path.join(__dirname, "media")));

const user = require("./routes/userRoute");

app.use("/user", user);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running with PORT " + PORT);
});