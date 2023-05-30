<template>
  <div class="xtx-numbox">
    <div class="label">数量</div>
    <div class="numbox">
      <a href="javascript:;" class="Control" @click="changNum(-1)">-</a>
      <input type="text" readonly v-model="nowNum" />
      <a href="javascript:;" class="Control" @click="changNum(1)">+</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsNumber",
  data() {
    return {
      nowNum: 1,
    };
  },
  methods: {
    changNum(step) {
      const newVal = this.nowNum + step;
      // 数量 < 1 或者 > 10 都不再进行
      if (newVal < 1 || newVal > 10) {
        // 搞个提示
        this.$notify.error({
          title: "提示",
          message: "未选择配送时间",
          showClose: false,
          duration: 3000,
          offset: 300,
        });
        return;
      }
      this.nowNum = newVal;
      // 发送 数量
      this.$store.commit("cart/getNum", this.nowNum);
    },
  },
  mounted() {
    // 组件挂在成功后 要把 store 商品置为 1
    this.$store.state.cart.cartOptions.Num = 1;
  },
};
</script>

<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
      border: none;
      outline: none;
      text-align: center;
    }
  }
}
.label {
  padding: 0;
  font-size: 100%;
  text-align: left;
}

.Control:hover,
.Control:focus {
  text-decoration: none;
}
</style>
