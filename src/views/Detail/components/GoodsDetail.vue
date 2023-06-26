<template>
  <div class="goodsdetail">
    <p class="g-name">{{ nowList.name }}</p>
    <p class="g-desc">{{ nowList.desc }}</p>
    <p class="g-price">
      <span>￥{{ nowList.newPrice }}</span>
      <span>￥{{ nowList.oldPrice }}</span>
    </p>
    <div class="g-service">
      <dl>
        <dt>促销</dt>
        <dd>12月好物放送，App领券购买直降120元</dd>
      </dl>
      <dl>
        <dt>配送地点</dt>
        <dd>
          <el-button size="small" plain> 河南省新乡市红旗区新乡学院 </el-button>
        </dd>
      </dl>
      <dl>
        <dt>配送时间</dt>
        <dd>
          <GoodsDate></GoodsDate>
        </dd>
      </dl>
      <dl>
        <dt>服务</dt>
        <dd>
          <span>无忧退货</span>
          <span>快速退款</span>
          <span>免费包邮</span>
          <a href="javascript:;">了解详情</a>
        </dd>
      </dl>
    </div>
    <GoodsStyle></GoodsStyle>
    <GoodsNumber></GoodsNumber>
    <BagButton type="primary" style="margin-top: 40px; margin-left: 20px">
      加入购物车
    </BagButton>
  </div>
</template>

<script>
import GoodsDate from "./GoodsDate.vue";
import GoodsStyle from "./GoodsStyle.vue";
import GoodsNumber from "./GoodsNumber.vue";
import BagButton from "@/components/Bag-Button.vue";
export default {
  name: "GoodsDetail",
  props: ["nowList"],
  components: {
    GoodsDate,
    GoodsStyle,
    GoodsNumber,
    BagButton,
  },
};
</script>

<style scoped lang="less">
.goodsdetail {
  margin-left: 140px;
}

.g-name {
  margin-top: 30px;
  font-size: 22px;
}
.g-desc {
  color: #999;
  margin-top: 10px;
}
.g-price {
  margin-top: 10px;
  span {
    &:first-child {
      color: #cf4444;
      margin-right: 10px;
      font-size: 22px;
    }
    &:last-child {
      color: #999;
      text-decoration: line-through;
      font-size: 16px;
    }
  }
}
.g-service {
  background: #f5f5f5;
  width: 500px;
  padding: 20px 10px 0 10px;
  margin-top: 10px;
  dl {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    dt {
      width: 75px;
      color: #999;
    }
    dd {
      color: #666;
      &:last-child {
        span {
          margin-right: 10px;
          &::before {
            content: "•";
            color: #27ba9b;
            margin-right: 2px;
          }
        }
        a {
          color: #27ba9b;
        }
      }
    }
  }
}

.el-button.is-plain:focus,
.el-button.is-plain:hover {
  color: #000;
  border: 1px solid #e4e4e4;
}

.el-button.is-active,
.el-button.is-plain:active {
  color: #000;
  border: 1px solid #e4e4e4;
}
</style>
