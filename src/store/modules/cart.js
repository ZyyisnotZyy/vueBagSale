// cart 放置信息 判断是否能够成功加入购物车 ==> 否则进行提示
export default {
  namespaced: true,
  state: {
    // 购物车的组成部分
    cartOptions: {
      // 1. 商品价格
      Price: 0,
      // 2. 商品名称
      Name: "",
      // 3. 配送地点
      Address: " 河南省新乡市红旗区新乡学院 ",
      // 4. 配送时间
      Time: null,
      // 6. 尺寸
      Type: null,
      // 7. 数量
      Num: 1,
      // 8. 图片
      imgUrl: "",
      // 9.总价
      Total: 0,
    },
    // 购物车商品数量
    cartGoodsNum: 0,
  },
  getters: {},
  mutations: {
    getPrice(state, payload) {
      state.cartOptions.Price = payload;
    },
    getName(state, payload) {
      state.cartOptions.Name = payload;
    },
    getTime(state, payload) {
      state.cartOptions.Time = payload;
    },
    getType(state, payload) {
      state.cartOptions.Type = payload;
    },
    getNum(state, payload) {
      state.cartOptions.Num = payload;
    },
    // 图片地址
    getImgUrl(state, payload) {
      state.cartOptions.imgUrl = payload;
    },
    // 商品总价
    getTotal(state, payload) {
      state.cartOptions.Total = payload;
    },
    // 购物车的数量
    getGoodsNum(state, payload) {
      state.cartGoodsNum = payload;
    },
  },
  actions: {},
};
