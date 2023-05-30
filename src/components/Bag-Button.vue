<template>
  <div>
    <el-button
      class="bag-button ellipsis"
      type="success"
      :class="[size, type]"
      @click="addCart"
    >
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BagButton",
  props: {
    size: {
      type: String,
      default: "middle",
    },
    type: {
      type: String,
      default: "default",
    },
  },
  methods: {
    // 点击添加购物车
    addCart() {
      // 根据和当前路由拿到当前数据 ==> 去除当前的价格
      const data = this.$store.state.goods.goodsList.find(
        (item) => `id:${item.id}` === this.$route.params.id
      );
      // 发送 价格
      this.$store.commit("cart/getPrice", data.newPrice);

      // 每个组件的数据均向购物车发送完毕
      // 校验当前是否有空值 ==> 可能情况 Time Type
      // 1.当前 Time 未选择
      if (
        this.$store.state.cart.cartOptions.Time === null ||
        this.$store.state.cart.cartOptions.Time === ""
      ) {
        this.$notify.error({
          title: "提示",
          message: "未选择配送时间",
          showClose: false,
          duration: 3000,
          offset: 300,
        });
      } else if (this.$store.state.cart.cartOptions.Type === null) {
        // 2.当前 Type 未选择
        this.$notify.error({
          title: "提示",
          message: "未选择商品尺寸",
          showClose: false,
          duration: 3000,
          offset: 300,
        });
      } else {
        axios
          .get("http://localhost:3000/cart/add", {
            params: {
              id: Number(this.$route.params.id.slice(3, 5)),
              Name: this.$store.state.cart.cartOptions.Name,
              Price: this.$store.state.cart.cartOptions.Price,
              Address: this.$store.state.cart.cartOptions.Address,
              Time: this.$store.state.cart.cartOptions.Time,
              Type: this.$store.state.cart.cartOptions.Type,
              Num: this.$store.state.cart.cartOptions.Num,
              imgUrl: this.$store.state.cart.cartOptions.imgUrl,
              Total:
                Number(this.$store.state.cart.cartOptions.Num) *
                Number(this.$store.state.cart.cartOptions.Price),
            },
          })
          .then((res) => {
            // 添加成功
            this.$notify.success({
              title: "成功",
              message: "商品已添加到购物车",
              showClose: false,
              duration: 3000,
              offset: 300,
            });
            // 此时的商品右上购物车的数字要相应改变
            // 成功 +1
            this.$store.state.cart.cartGoodsNum++;
          })
          .catch((err) => {
            // 添加失败
            this.$notify.error({
              title: "提示",
              message: "商品添加失败",
              showClose: false,
              duration: 3000,
              offset: 300,
            });
            console.log("操作失败" + err);
          });
      }
    },
  },
};
</script>

<style scoped lang="less">
.bag-button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: #27ba9b;
  background: #27ba9b;
  color: #fff;
}
.plain {
  border-color: #27ba9b;
  color: #27ba9b;
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
