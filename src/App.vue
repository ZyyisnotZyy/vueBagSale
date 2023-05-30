<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from "./views/Layout.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Layout,
  },
};
</script>

<style scoped></style>
