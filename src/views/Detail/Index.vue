<template>
  <!-- 商品详情 -->
  <div class="div">
    <div class="index">
      <!-- 导航 -->
      <BagHeader></BagHeader>
      <!-- 商品详情 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadCrump">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item to="/goodsList"> 商品 </el-breadcrumb-item>
        <!-- 根据当前路由拿到当前商品名称 -->
        <el-breadcrumb-item>{{ data.name }}</el-breadcrumb-item>
      </el-breadcrumb>

      <el-container>
        <el-aside width="160px"></el-aside>
        <el-main>
          <!-- 分为左右两侧 -->
          <!-- 左侧---商品预览 + 放大效果 -->
          <!-- 左侧图片预览 -->
          <GoodsImage :goodsList="this.$store.state.goods.goodsList">
          </GoodsImage>
          <GoodsSales></GoodsSales>
        </el-main>
        <el-aside width="160px"></el-aside>
      </el-container>
    </div>
    <div class="footer">
      <BagFooter></BagFooter>
    </div>
    <!-- 回到顶部 -->
    <el-backtop :visibility-height="100" :bottom="80" :right="20"></el-backtop>
  </div>
</template>

<script>
import BagHeader from "../../components/Bag-Header.vue";
import GoodsImage from "./components/GoodsImage.vue";
import GoodsSales from "./components/GoodsSales.vue";
import GoodsStyle from "./components/GoodsStyle.vue";
import BagFooter from "../../components/Bag-Footer.vue";
export default {
  name: "Index",
  components: {
    BagHeader,
    GoodsImage,
    GoodsSales,
    GoodsStyle,
    BagFooter,
  },
  data() {
    return {
      goodsList: "",
      data: "",
    };
  },
  mounted() {
    this.data = this.$store.state.goods.goodsList.find(
      (item) => `id:${item.id}` === this.$route.params.id
    );
  },
};
</script>

<style scoped>
.index {
  background-color: #f5f5f5;
  margin-bottom: 150px;
}

.el-container {
  margin-top: 20px;
}

.el-main {
  background-color: #fff;
  overflow: hidden;
}

.breadCrump {
  padding-top: 40px;
  margin-left: 160px;
}

::v-deep .el-breadcrumb__inner a:hover,
::v-deep .el-breadcrumb__inner.is-link:hover {
  color: #000;
}
</style>
