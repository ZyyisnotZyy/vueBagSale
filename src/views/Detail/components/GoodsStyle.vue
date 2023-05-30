<template>
  <div class="goods-sku">
    <dl>
      <dt>尺寸</dt>
      <dd v-for="(item, index) in newGet1" :key="index">
        <!-- 默认 status 为 true 选中 -->
        <!-- 点击切换选中状态 -->
        <span
          :class="{ selected: item.status === true }"
          @click="changeStatus(item.status, index)"
        >
          {{ item.name }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "GoodsStyle",
  data() {
    return {
      sizeArr: "",
      newGet1: [],
      flag: "",
    };
  },
  mounted() {
    // 组件挂在成功后 要把 store 尺寸置为 null
    this.$store.state.cart.cartOptions.Type = null;

    // 根据当前路由 id 拿到当前的数据
    const data = this.$store.state.goods.goodsList.find(
      (item) => `id:${item.id}` === this.$route.params.id
    );

    // 为了解决用户不点击--获取默认第一个数据的 Bug
    // 结局办法 ==> 获取当前商品后,把当前的第一个 type 交给 store

    // 凑巧发送商品名称
    this.$store.commit("cart/getName", data.name);
    // 凑巧发送商品图片
    this.$store.commit("cart/getImgUrl", data.imgUrl);
    // size:{name:'长50 x 深34 x 宽22.5厘米',status:true},,{name:'长50 x 深34 x 宽30厘米',status:false}
    // 1. 进行分割,以 ,, 分割成两个数组
    const flag = data.size.split(",,");
    this.sizeArr = flag;
    // 2.完成后 得到以下两个数组
    // 0: "{name:'长50 x 深34 x 宽22.5厘米',status:true}"
    // 1: "{name:'长50 x 深34 x 宽30厘米',status:false}"

    // 3. flag 是数组 但 flag[0] flag[1] 是 String 字符串
    // 这时候 flag[0].name 是 undefined
    // 将 flag[0] flag[1] 转换成 Object 对象形式 ===> 通过 eval("(" + str + ")")
    for (var i = 0; i < flag.length; i++) {
      var abc = eval("(" + flag[i] + ")");
      // 把两个对象 push 到 newGet1 中
      this.newGet1.push(abc);
    }

    // 解决的这个 Bug 不用遍历循环 谁是 true 就拿到谁 ==> 因为默认第一个为 true
    // 默认的 Type 就是 当前选中的 第一个 为 true 的值
    this.$store.state.cart.cartOptions.Type = this.newGet1[0].name;

    const arr = [
      { name: "历史", grade: 100 },
      { school: "哔哩哔哩", address: "广州" },
    ];
  },
  methods: {
    changeStatus(newStatus, index) {
      // 选中的标志是 当前的 newStatus === true
      // 如果点的是 false ==> 改成 true
      if (!newStatus) {
        // 把其他所有的状态都置为 false
        this.newGet1.forEach((item) => {
          item.status = false;
        });
        // 把点的 status 置为 true
        this.newGet1[index].status = true;
        // 发送 尺寸
        this.$store.commit("cart/getType", this.newGet1[index].name);
      }
      // 如果再次点击选中 就要置为未选中状态 ==> 即,false
      if (newStatus === true) {
        this.newGet1[index].status = false;
        // 发送 空尺寸
        this.$store.commit("cart/getType", null);
      }
    },
  },
};
</script>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: #27ba9b;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
