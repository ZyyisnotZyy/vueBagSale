<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 商品信息 -->
        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">配送时间</th>
                <th width="170">配送地址</th>
                <th width="170">小计</th>
                <th width="120">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartList" :key="item.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="item.imgUrl" alt="" />
                    <div class="right">
                      <p>{{ item.Name }}</p>
                      <p>{{ item.Type }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ item.Price }}</td>
                <td>{{ item.Num }}</td>
                <td>{{ item.Time.slice(0, 10) }}</td>
                <td>{{ item.Address }}</td>
                <td>&yen;{{ item.Total }}</td>
                <td>
                  <el-button type="danger" @click="del(item.id)">
                    删除
                  </el-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件数：</dt>
              <dd>{{ cartLength }}件</dd>
            </dl>
            <dl>
              <dt>商品总价：</dt>
              <dd>¥{{ cartTotal }}</dd>
            </dl>

            <dl>
              <dt>运<i></i>费：</dt>
              <dd>¥0.00</dd>
            </dl>
            <dl>
              <dt>应付总额：</dt>
              <dd class="price">¥{{ cartTotal }}</dd>
            </dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <el-button type="success" class="pay" @click="pay">
            点击支付
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cart",
  components: {},
  data() {
    return {
      cartList: "",
      // 商品个数 ==> length
      cartLength: 0,
      // 商品总价数组
      //cartTotalList: [],
      // 商品总价 ==> reduce
      cartTotal: 0,
    };
  },
  mounted() {
    // 挂载时调用一次
    this.getAllCart();
  },
  methods: {
    // 获取数据 ==> 方便后续调用
    getAllCart() {
      // 拿到当前购物车的所有数据
      axios
        .get("http://localhost:3000/cart/all")
        .then(({ data }) => {
          this.cartList = data;
          this.cartLength = data.length;
          // 循环遍历 商品的总价
          data.forEach((item) => {
            // 这个要搭配 reduce 使用
            // this.cartTotalList.push(Number(item.Total));
            this.cartTotal += Number(item.Total);
          });
          //this.cartTotal = this.cartTotalList.reduce((p, c) => p + c, 0);
          // 拿到每个商品的总价 ==> 进行 reduce 相加 ==> 得到所有商品总价
        })
        .catch((err) => {
          console.log(err);
        });
    },

    del(delId) {
      // 拿到删除的 id ==> 删除商品
      axios
        .get("http://localhost:3000/cart/del", {
          params: {
            id: delId,
          },
        })
        .then((res) => {
          // 删除成功
          this.$notify.success({
            title: "成功",
            message: "该商品已从后台删除",
            showClose: false,
            duration: 3000,
            offset: 300,
          });
          // ????  为什么删除成功后 ==> 商品总金额没有相应的改变 ???
          // ==> 这是因为 如果使用 reduce 的话会把上一次的结果仍然加上导致数据不更新
          // ==> 使用循环 forEach 代替 ==> 累计相加
          // 每次加之前 先清0
          this.cartTotal = 0;
          // 删除成功调用一次
          this.getAllCart();
          // 每删除一次 购物车数量都要 -1
          this.$store.state.cart.cartGoodsNum--;
        })
        .catch((err) => {
          console.log("操作失败" + err);
        });
    },

    pay() {
      // 点击支付
      this.$notify.success({
        title: "成功",
        message: "订单已提交",
        showClose: false,
        duration: 3000,
        offset: 300,
      });
    },
  },
};
</script>

<style scoped lang="less">
.pay {
  background-color: #27ba9b;
}

.el-button--danger {
  width: 68px;
}

.xtx-pay-checkout-page {
  .wrapper {
    background: #fff;
    padding: 0 20px;
    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }
    .box-body {
      padding: 20px 0;
    }
  }
}
.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;
    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }
    > ul {
      flex: 1;
      padding: 20px;
      li {
        line-height: 30px;
        span {
          color: #999;
          margin-right: 5px;
          > i {
            width: 0.5em;
            display: inline-block;
          }
        }
      }
    }
    > a {
      color: #27ba9b;
      width: 160px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }
  .action {
    width: 420px;
    text-align: center;
    .btn {
      width: 140px;
      height: 46px;
      line-height: 44px;
      font-size: 14px;
      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  .info {
    display: flex;
    text-align: left;
    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
      outline: none !important;
    }
    .right {
      line-height: 24px;
      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }
  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }
    td,
    th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;
      &:first-child {
        border-left: 1px solid #f5f5f5;
      }
      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}
.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;
  &.active,
  &:hover {
    border-color: #27ba9b;
  }
}
.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;
    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }
    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;
      &.price {
        font-size: 20px;
        color: #cf4444;
      }
    }
  }
}
.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}
</style>
