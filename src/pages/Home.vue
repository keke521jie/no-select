<template>
  <div class="home">
    <div class="title">又不知到吃啥了？抽个签决定吧，赶走纠结症！</div>
    <van-button class="btn" color="skyblue" to="/selectfood">交给天意</van-button>
  </div>
</template>

<script setup>
</script>

<style lang="less">
.home {
  width: 100vw;
  height: 100vh;
  background-image: url("../static/background/5.jpg");
  background-size: cover;
  padding: .1rem;
  .title {
    color :#fff;
    font-size: .25rem;
    font-weight: 700;
    margin-top: 2.6rem;
    width: 2rem;
    margin-bottom: 0.2rem;
  }
}
</style>