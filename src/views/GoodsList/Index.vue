<template>
  <div>
    <BagHeader></BagHeader>
    <Show></Show>
    <Show></Show>
    <BagFooter></BagFooter>
    <!-- 回到顶部 -->
    <el-backtop :visibility-height="100" :bottom="80" :right="20"></el-backtop>
  </div>
</template>

<script>
import BagHeader from "../../components/Bag-Header.vue";
import BagFooter from "../../components/Bag-Footer.vue";
import Show from "../Home/Show.vue";
export default {
  name: "GoodsList",
  components: {
    BagHeader,
    BagFooter,
    Show,
  },
};
</script>

<style scoped lang="less">
.empty {
  background-color: #f5f5f5;
  height: 800px;
}
</style>
