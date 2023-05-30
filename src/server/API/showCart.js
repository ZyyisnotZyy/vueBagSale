let db = require("../db");

exports.all = (req, res) => {
  //获取getcartoptions表全部数据
  var sql = "select * from getcartoptions";
  db.query(sql, (err, data) => {
    if (err) {
      return res.send("错误：" + err.message);
    }
    res.send(data);
  });
};

exports.get = (req, res) => {
  //通过id查询数据
  //？用于占位
  var sql = "select * from getcartoptions where id = ?";
  db.query(sql, [req.query.id], (err, data) => {
    if (err) {
      return res.send("错误：" + err.message);
    }
    res.send(data);
  });
};

exports.del = (req, res) => {
  //通过id删除数据
  var sql = "delete from getcartoptions where id = ?";
  db.query(sql, [req.query.id], (err, data) => {
    if (err) {
      return res.send("错误：" + err.message);
    }
    if (data.affectedRows > 0) {
      res.send({
        status: 200,
        message: "删除成功",
      });
    } else {
      res.send({
        status: 202,
        message: "删除失败",
      });
    }
  });
};

exports.add = (req, res) => {
  //向 getcartoptions 表添加数据
  var sql =
    "insert into getcartoptions (id,Name,Price,Address,Time,Type,Num,imgUrl,Total) values (?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      req.query.id,
      req.query.Name,
      req.query.Price,
      req.query.Address,
      req.query.Time,
      req.query.Type,
      req.query.Num,
      req.query.imgUrl,
      req.query.Total,
    ],
    (err, data) => {
      if (err) {
        return res.send("错误：" + err.message);
      }
      if (data.affectedRows > 0) {
        res.send({
          status: 200,
          message: "success",
        });
        console.log(data);
      } else {
        res.send({
          status: 202,
          message: "error",
        });
      }
    }
  );
};

exports.update = (req, res) => {
  //通过id更新数据
  var sql =
    "UPDATE getcartoptions SET Name = ?, Price = ?, Address = ?, Time = ?, Type = ?, Num = ?,Total = ? WHERE id = ?";
  db.query(
    sql,
    [
      req.query.Name,
      req.query.Price,
      req.query.Address,
      req.query.Time,
      req.query.Type,
      req.query.Num,
      req.query.Total,
      req.query.id,
    ],
    (err, data) => {
      if (err) {
        return res.send("错误：" + err.message);
      }
      if (data.changedRows > 0) {
        res.send({
          status: 200,
          message: "success",
        });
      } else {
        res.send({
          status: 202,
          message: "error",
        });
      }
    }
  );
};

// 为了获取购物车商品中的数量
exports.many = (req, res) => {
  //获取 getcartoptions 表全部数据
  var sql = "select count(*) as many from getcartoptions";
  db.query(sql, (err, data) => {
    if (err) {
      return res.send("错误：" + err.message);
    }
    res.send(data);
  });
};
