const sequelize = require("../connection/connection");
(Sequelize = require("sequelize")),
  (DataTypes = Sequelize.DataTypes),
  (User = require("./user")(sequelize, DataTypes));

module.exports = { User };
