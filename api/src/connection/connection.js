const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("presupuestos", "espartaco", "123456", {
  host: "localhost",
  dialect: "mysql",
});
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testConnection();
module.exports = sequelize;
