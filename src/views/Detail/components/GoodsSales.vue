<template>
  <ul class="goods-sales">
    <li>
      <p>销量人气</p>
      <p>200+</p>
      <p><i class="el-icon-s-data" style="color: #27ba9b"></i>销量人气</p>
    </li>
    <li>
      <p>商品评价</p>
      <p>400+</p>
      <p><i class="el-icon-s-flag" style="color: #27ba9b"></i>查看评价</p>
    </li>
    <li>
      <p>收藏人气</p>
      <p>600+</p>
      <p><i class="el-icon-star-on" style="color: #27ba9b"></i>收藏商品</p>
    </li>
    <li>
      <p>品牌信息</p>
      <p>苏宁电器</p>
      <p><i class="el-icon-s-promotion" style="color: #27ba9b"></i>品牌主页</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GoodsSales",
};
</script>

<style scoped lang="less">
ul {
  margin-top: -150px;
}
.goods-sales {
  display: flex;
  width: 400px;
  align-items: center;
  text-align: center;
  height: 140px;
  li {
    list-style: none;
    flex: 1;
    position: relative;
    ~ li::after {
      position: absolute;
      top: 10px;
      left: 0;
      height: 60px;
      border-left: 1px solid #e4e4e4;
      content: "";
    }
    p {
      &:first-child {
        color: #999;
      }
      &:nth-child(2) {
        margin-top: 10px;
      }
      &:last-child {
        color: #666;
        margin-top: 10px;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
