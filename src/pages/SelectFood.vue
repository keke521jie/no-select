<template>
  <div class="selectfood">
    <div class="title">添加食物戳我脸决定吃啥</div>
    <div class="btn" @click="select"></div>
    <van-icon name="arrow-left" @click="back" class="font" />
    <div class="body">
      <van-field
        v-model="food"
        label="名称"
        placeholder="请添加食物"
        @blur="addFood"
      />
      <van-tag
        :show="show"
        closeable
        size="large"
        type="primary"
        @close="close(i)"
        v-for="(food, i) in foodList"
        :key="i"
        class="food"
      >
        {{ food }}
      </van-tag>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router' 
const router = useRouter()
let foodList = reactive([]);
let food = ref("");
function back() {
  router.push("/");
}
function addFood() {
  if (food.value.trim() == "") return;
  let result = foodList.find((item) => item == food.value);
  if (!result) foodList.push(food.value);
  food.value = "";
}
function close(i) {
  foodList.splice(i, 1);
}
function select() {
  if (foodList.length < 1) return
  let n = Math.floor(Math.random() * foodList.length + 1) - 1;
  router.push(`/result/${foodList[n]}`);
}
</script>

<style lang="less">
.selectfood {
  width: 100vw;
  height: 100vh;
  background-image: url("../static/background/6.jpg");
  background-size: cover;
  padding: 30px;
  position: relative;
  .title {
    position: absolute;
    right: 30px;
    top: 100px;
    color: #fff;
    font-weight: 700;
    width: 65px;
    font-size: 18px;
  }
  .btn {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 108px;
    left: 165px;
  }
  .font {
    font-size: 30px;
    color: #fff;
  }
  .food {
    margin: 5px 3px;
  }
  .body {
    margin-top: 290px;
  }
}
</style>