<template>
  <div>
    <BagHeader></BagHeader>
    <el-skeleton :rows="15" />
    <BagFooter></BagFooter>
  </div>
</template>

<script>
import BagHeader from "../../components/Bag-Header.vue";
import BagFooter from "../../components/Bag-Footer.vue";
export default {
  name: "More",
  components: {
    BagHeader,
    BagFooter,
  },
};
</script>

<style scoped lang="less">
.empty {
  background-color: #f5f5f5;
  height: 1000px;
}
</style>
