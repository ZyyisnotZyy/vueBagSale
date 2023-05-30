<template>
  <!-- 分类图片展示区 -->
  <div class="show">
    <!-- 第一条数据 -->
    <el-row v-if="goodsList_1">
      <el-col :span="6" v-for="item in goodsList_1" :key="item.id">
        <el-card :body-style="{ padding: '0' }">
          <router-link :to="`/detail/id:${item.id}`">
            <img :src="item.imgUrl" class="image" />
          </router-link>
          <div style="padding: 14px">
            <div class="title">
              <span>
                <strong>{{ item.name }}</strong>
              </span>
            </div>
            <div class="desc">
              <p>{{ item.desc }}</p>
            </div>
            <div class="bottom">
              <div class="newPrice">￥{{ item.newPrice }}</div>
              <div class="oldPrice">￥{{ item.oldPrice }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 做个骨架屏---提高用户使用效果 -->
    <template v-else>
      <Skeleton></Skeleton>
    </template>
    <!-- 第二条数据 -->
    <el-row v-if="goodsList_2">
      <el-col :span="6" v-for="item in goodsList_2" :key="item.id">
        <el-card :body-style="{ padding: '0' }">
          <router-link :to="`/detail/id:${item.id}`">
            <img :src="item.imgUrl" class="image" />
          </router-link>
          <div style="padding: 14px">
            <div class="title">
              <span>
                <strong>{{ item.name }}</strong>
              </span>
            </div>
            <div class="desc">
              <p>{{ item.desc }}</p>
            </div>
            <div class="bottom">
              <div class="newPrice">￥{{ item.newPrice }}</div>
              <div class="oldPrice">￥{{ item.oldPrice }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 做个骨架屏---提高用户使用效果 -->
    <template v-else>
      <Skeleton></Skeleton>
    </template>
    <!-- 第三条数据 -->
    <el-row v-if="goodsList_3">
      <el-col :span="6" v-for="item in goodsList_3" :key="item.id">
        <el-card :body-style="{ padding: '0' }">
          <router-link :to="`/detail/id:${item.id}`">
            <img :src="item.imgUrl" class="image" />
          </router-link>
          <div style="padding: 14px">
            <div class="title">
              <span>
                <strong>{{ item.name }}</strong>
              </span>
            </div>
            <div class="desc">
              <p>{{ item.desc }}</p>
            </div>
            <div class="bottom">
              <div class="newPrice">￥{{ item.newPrice }}</div>
              <div class="oldPrice">￥{{ item.oldPrice }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 做个骨架屏---提高用户使用效果 -->
    <template v-else>
      <Skeleton></Skeleton>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Detail from "../Detail/Index.vue";
import Skeleton from "./Skeleton.vue";
export default {
  name: "BagHeader",
  components: {
    Detail,
    Skeleton,
  },
  data() {
    return {
      goodsList_1: null,
      goodsList_2: null,
      goodsList_3: null,
    };
  },
  mounted() {
    // 加载完成后 发送请求
    axios.get("http://localhost:3000/showGoods").then((result) => {
      this.goodsList_1 = result.data.slice(0, 3);
      this.goodsList_2 = result.data.slice(3, 6);
      this.goodsList_3 = result.data.slice(6, 9);
      // 请求发送成功后 ---> 把总数据传递到 Vuex
      this.$store.commit("goods/getData", result.data);
    });
  },
};
</script>

<style scoped lang="less">
.show {
  margin-bottom: 300px;
}

.nowPrice {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  display: flex;
  float: right;
  align-items: center;
}

.oldPrice {
  font-size: 20px;
  text-decoration: line-through;
}

.newPrice {
  font-size: 30px;
  padding-right: 10px;
}
.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.el-row {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

// 鼠标悬浮效果
.el-card {
  transition: all 0.5s;
}

.el-card:hover {
  cursor: pointer;
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.title {
  text-align: center;
  font-size: 24px;
  margin-top: -20px;
}

.desc {
  text-align: center;
}

::v-deep img {
  outline: none !important;
}
</style>
