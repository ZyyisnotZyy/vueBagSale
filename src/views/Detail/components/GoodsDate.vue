<template>
  <div class="block">
    <el-date-picker
      v-model="selectDate"
      type="date"
      placeholder="选择日期"
      value-format="yyyy-MM-dd"
      @change="getDate"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "GoodsDate",
  data() {
    return {
      selectDate: "",
    };
  },
  mounted() {
    // 组件挂载的时候 调用一次 getDate()  判断是否选中配送时间
    this.getDate();
  },
  methods: {
    // 选中日期
    getDate() {
      // 选中日期才进行发送 store 更改 cart 配置选项
      this.$store.commit("cart/getTime", this.selectDate);
    },
  },
};
</script>

<style></style>
