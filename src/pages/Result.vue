<template>
  <div class="result">
    <div class="title">就决定是你了:{{ route.params.food }}</div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="less">
.result {
  width: 100vw;
  height: 100vh;
  background-image: url("../static/background/3.jpg");
  background-size: cover;
  padding: 20px;
  .title {
    font-size: 30px;
    color: #fff;
    margin-top: 250px;
  }
}
</style>