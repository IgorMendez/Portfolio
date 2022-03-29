require("dotenv").config();
console.log(process.env.NODE_ENV, "it is being loaded correctly");
const config = {
  development: {
    username: "root",
    password: "Fund@o916293",
    database: "portfolio",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    dialectOptions: {
      charset: "utf8mb4",
    },
  },
  production: {
    username: "root",
    password: "Fund@o916293",
    database: "portfolio",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    dialectOptions: {
      charset: "utf8mb4",
    },
  },
};
console.log(config);
module.exports = config;