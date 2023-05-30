<template>
  <div>
    <BagHeader></BagHeader>
    <el-empty :image-size="200" class="empty" description="好物"></el-empty>
    <BagFooter></BagFooter>
  </div>
</template>

<script>
import BagHeader from "../../components/Bag-Header.vue";
import BagFooter from "../../components/Bag-Footer.vue";
export default {
  name: "HaoWu",
  components: {
    BagHeader,
    BagFooter,
  },
};
</script>

<style scoped lang="less">
.empty {
  background-color: #f5f5f5;
  height: 800px;
}
</style>
