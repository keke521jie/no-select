<template>
  <div class="nav">
    <div class="item" :class="{'active': i == navCur}" v-for="(item,i) in navList" :key="item.id" @click="changeNav(i)">
      <van-icon :name="item.iconName" />
    </div>
  </div>
</template>

<script setup>
    import { reactive,ref } from "vue";
    const navCur = ref(0)
    const navList = reactive([
    {
        iconName: 'wap-home',
        id: 1,
    },
    {
        iconName: 'wap-home',
        id: 2,
    },
    {
        iconName: 'wap-home',
        id: 3,
    },
    {
        iconName: 'wap-home',
        id: 4,
    }
    ]);
    function changeNav(index){
        navCur.value = index
    }
</script>

<style lang="less">
.nav {
  width: 100%;
  height: 0.6rem;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .item {
    font-size: 0.3rem;
    color: skyblue;
  }
  .active{
    color: pink;
  }
}
</style>