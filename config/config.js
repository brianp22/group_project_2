require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "coffee_ordersDB",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: false
    }
  },

  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
