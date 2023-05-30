<template>
  <el-container>
    <el-main>
      <div class="total">
        <!-- 当前显示的图片 -->
        <div class="nowShow" ref="target">
          <vue-photo-zoom-pro :url="url" :high-url="url" :width="160">
          </vue-photo-zoom-pro>
          <GoodsDetail :nowList="nowList"></GoodsDetail>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import imgZoom from "vue2.0-zoom";
import GoodsDetail from "./GoodsDetail.vue";
import vuePhotoZoomPro from "vue-photo-zoom-pro";
import "vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css";
export default {
  name: "GoodsImage",
  props: {
    goodsList: {
      type: Array,
    },
  },
  components: { imgZoom, GoodsDetail, vuePhotoZoomPro },
  data() {
    return {
      configs: {
        width: 500,
        height: 400,
        maskWidth: 100,
        maskHeight: 100,
        maskColor: "rgba(0, 0, 0, 0.2)",
        maskOpacity: 1,
      },
      nowList: [],
      url: "",
    };
  },
  mounted() {
    // 拿到当前路由的 id
    // 根据 id 获取当前具体的数据
    const data = this.goodsList.find(
      (item) => `id:${item.id}` === this.$route.params.id
    );
    this.nowList = data;
    this.url = data.imgUrl;
  },
};
</script>

<style scoped lang="less">
.el-main {
  margin-top: -30px;
}

.nowShow {
  width: 100%;
  height: 100%;
  display: flex;
}

::v-deep img {
  outline: none !important;
}
</style>
