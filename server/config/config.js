const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    migrationStorageTableName: "NodeMigration",
    dialect: "mysql",
    timezone: "+05:30",
    logging: (msg) => console.log(msg),
    logging: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  staging: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    migrationStorageTableName: "NodeMigration",
    dialect: "mysql",
    timezone: "+05:30",
    logging: false,
    // logging: (msg) => console.log(msg),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    migrationStorageTableName: "NodeMigration",
    dialect: "mysql",
    timezone: "+05:30",
    logging: false,
    dialectOptions: {
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  define: {
    timestamps: false,      // Disable timestamps
    freezeTableName: true,  // Freeze the table name
  },
};