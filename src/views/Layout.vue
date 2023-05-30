<template>
  <div>
    <!-- 头部导航栏 -->
    <BagHeader></BagHeader>
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <!-- 介绍 -->
    <Introduce></Introduce>
    <!-- 主题图片渲染 -->
    <Show></Show>
    <!-- Footer 组件 -->
    <BagFooter></BagFooter>
    <!-- 回到顶部 -->
    <el-backtop :visibility-height="600" :bottom="80" :right="20"></el-backtop>
  </div>
</template>

<script>
import BagHeader from "../components/Bag-Header.vue";
import Carousel from "./Home/Carousel.vue";
import Show from "./Home/Show.vue";
import Introduce from "./Home/Introduce.vue";
import BagFooter from "../components/Bag-Footer.vue";
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    BagHeader,
    Carousel,
    Show,
    Introduce,
    BagFooter,
  },
};
</script>

<style scoped lang="less"></style>
