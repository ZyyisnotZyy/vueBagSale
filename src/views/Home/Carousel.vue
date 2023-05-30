<template>
  <div class="carousel">
    <!-- 轮播图 -->
    <el-carousel :interval="3500" arrow="hover" trigger="click">
      <el-carousel-item v-for="item in carouselList" :key="item.id">
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      // 轮播图片数据
      carouselList: [
        { id: 1, url: require("../../assets/img/Carousel_1.jpg") },
        { id: 2, url: require("../../assets/img/Carousel_2.jpg") },
        { id: 3, url: require("../../assets/img/Carousel_3.jpg") },
        { id: 4, url: require("../../assets/img/Carousel_4.jpg") },
      ],
    };
  },
};
</script>

<style>
.el-carousel__item img {
  width: 1000%;
  object-fit: cover;
}

/* 更改轮播图的高度 */
.el-carousel__container {
  height: 400px;
}

.el-carousel__arrow {
  height: 55px;
  width: 55px;
  font-size: 40px;
}
</style>
