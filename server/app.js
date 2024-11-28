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
const authRoutes = require("./routes/authRoute");
const groupRoutes = require("./routes/groupRoute");
const productRoutes = require("./routes/productRoute");
const categoryRoutes = require("./routes/categoryRoute");
const cartRoutes = require("./routes/cartRoute");
const shippingTypeRoutes = require("./routes/shippingTypeRoute");
const reviewRoutes = require("./routes/reviewRoute");
const addressRoutes = require("./routes/addressRoute");
const paymentRoutes = require("./routes/paymentRoute");
const orderRoutes = require("./routes/orderRoutes");
// const productRoute = require("./routes/groupRoute");
const subcategoryRoutes = require("./routes/subcategoryRoute");
const searchRoutes = require("./routes/searchRoute");
const companyRoutes = require("./routes/companyRoute");

app.use("/user", user);
app.use("/auth", authRoutes);
app.use("/groups", groupRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/cart", cartRoutes);
app.use("/shippingtypes", shippingTypeRoutes);
app.use("/reviews", reviewRoutes);
app.use("/addresses", addressRoutes);
app.use("/payments", paymentRoutes);
app.use("/orders", orderRoutes);
app.use("/groups", groupRoutes);
app.use("/subcategories", subcategoryRoutes);
app.use("/search", searchRoutes);
app.use("/companies", companyRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running with PORT " + PORT);
});