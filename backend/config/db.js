const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("wireonelabs", "root", "PayCio@123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
