let express = require("express");
let router = express.Router();
let goods = require("./API/showGoods");
let cart = require("./API/showCart");
// 图片数据接口
router.get("/showGoods", goods.get);

// 购物车接口
router.get("/cart/all", cart.all);
router.get("/cart/get", cart.get);
router.get("/cart/add", cart.add);
router.get("/cart/update", cart.update);
router.get("/cart/del", cart.del);
router.get("/cart/many", cart.many);
module.exports = router;
