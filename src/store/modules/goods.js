// 放置 goodsList 共享所有数据
export default {
  namespaced: true,
  state: {
    goodsList: [],
  },
  getters: {},
  mutations: {
    getData(state, payload) {
      state.goodsList = payload;
    },
  },
  actions: {},
};
