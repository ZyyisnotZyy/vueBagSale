<template>
  <!-- 导航栏头部 -->
  <!-- 使用 eleUi 设计 -->
  <div>
    <!-- 头部 -->
    <div id="top" class="navbar navbar-dark navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <i class="fa fa-bars fa-2x"></i>
          </button>
          <router-link class="navbar-brand" to="/">
            <strong>Bag</strong>Sale
          </router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><router-link to="/">首页</router-link></li>
            <li><router-link to="/goodsList">商品</router-link></li>
            <li><router-link to="/haoWu">好物</router-link></li>
            <li><router-link to="/more">更多</router-link></li>
            <li><router-link to="/backStage">后台</router-link></li>
            <li>
              <router-link to="/cart">
                购物车
                <el-badge :value="carNum"></el-badge>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/bootstrap-theme.css";
import "../assets/css/bootstrap-theme.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/main.css";
import "../assets/css/NewsCyle.css";
import "../assets/css/Oswald.css";
import axios from "axios";
export default {
  name: "BagHeader",
  data() {
    return {
      value: true,
      // 默认从 store 中取数据
      //carNum: 0,
      carNum: this.$store.state.cart.cartGoodsNum,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/cart/many")
      .then(({ data }) => {
        // 当切换到其它页面后 ==> 读取到 store 中 购物车的数量 ==> 放置数量丢失
        // 现在需要从数据库中获取当前的值
        this.carNum = data[0].many;
        // 把商品数量发送到 store
        this.$store.commit("cart/getGoodsNum", this.carNum);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    test() {
      return this.$store.state.cart.cartGoodsNum;
    },
  },
  watch: {
    test(newVal) {
      this.carNum = newVal;
    },
  },
};
</script>

<style scoped lang="less">
::v-deep .el-badge__content {
  background-color: #3aa30f;
  border: 0;
}
</style>
