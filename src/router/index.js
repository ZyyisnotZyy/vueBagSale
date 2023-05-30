import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Detail from "../views/Detail/Index.vue";
import GoodsList from "../views/GoodsList/Index.vue";
import HaoWu from "../views/HaoWu/Index.vue";
import More from "../views/More/Index.vue";
import Cart from "../views/Cart/Index.vue";
import BackStage from "../views/BackStage/Index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
  {
    // 商品详情
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    // 商品列表
    path: "/goodsList",
    name: "GoodsList",
    component: GoodsList,
  },
  {
    // 好物
    path: "/haoWu",
    name: "HaoWu",
    component: HaoWu,
  },
  {
    // 更多
    path: "/more",
    name: "More",
    component: More,
  },
  {
    // 购物车
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    // 后台管理
    path: "/backStage",
    name: "BackStage",
    component: BackStage,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Layout") {
    next();
  }
  if (to.name === "Detail") {
    next();
    // 解决 bug 当点击商品详情时 ==> 滚动条置顶
    // 也可以放在 Detail 的 Index 组件的 mounted 中
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  if (to.name === "GoodsList" || "HaoWu" || "More") {
    next();
  }
});

export default router;
