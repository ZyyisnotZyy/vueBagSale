import Vue from "vue";
import Vuex from "vuex";
import goods from "./modules/goods";
import cart from "./modules/cart";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { goods, cart },
});
