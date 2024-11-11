"use strict";

const fs = require("fs");
const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const process = require("process");
const basename = path.basename(__filename);
const config = require(__dirname + "/../config/config.js")[
  process.env.NODE_ENV
];
const db = {};

let sequelize;
if (config.use_env_variable != undefined && config.use_env_variable != "") {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected..");
    })
    .catch((err) => {
      console.log(err);
    });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, DataTypes);
db.Address = require("./address")(sequelize, DataTypes);
db.Brand = require("./brand")(sequelize, DataTypes);
db.Cart = require("./cart")(sequelize, DataTypes);
db.CartItem = require("./cartitem")(sequelize, DataTypes);
db.Category = require("./category")(sequelize, DataTypes);
db.Color = require("./color")(sequelize, DataTypes);
db.DiscountCode = require("./discountcode")(sequelize, DataTypes);
db.Group = require("./group")(sequelize, DataTypes);
db.Order = require("./order")(sequelize, DataTypes);
db.OrderItem = require("./orderitem")(sequelize, DataTypes);
db.Product = require("./product")(sequelize, DataTypes);
db.ProductImage = require("./productimage")(sequelize, DataTypes);
db.ProductItem = require("./productitem")(sequelize, DataTypes);
db.ProductSpecification = require("./productspecification")(
  sequelize,
  DataTypes
);
db.ProductVariation = require("./productvariation")(sequelize, DataTypes);
db.Review = require("./review")(sequelize, DataTypes);
db.ShippingType = require("./shippingtype")(sequelize, DataTypes);
db.SizeCategory = require("./sizecategory")(sequelize, DataTypes);
db.SizeOption = require("./sizeoption")(sequelize, DataTypes);
db.SpecificationOption = require("./specificationoption")(sequelize, DataTypes);
db.SubCategory = require("./subcategory")(sequelize, DataTypes);

module.exports = db;