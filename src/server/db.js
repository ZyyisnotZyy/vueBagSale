let mysql = require("mysql");

let db = mysql.createPool({
  // 配置数据库IP地址
  host: "127.0.0.1",
  user: "root",
  // mysql 密码
  password: "",
  // 连接数据库的名字
  database: "",
});

module.exports = db;
