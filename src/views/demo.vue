<script setup>
import { ref, onMounted } from "vue";
import MyBtn from "./myButton.vue";
const showBtns = ref(false);
const link1 = () => {
  window.open('https://www.baidu.com')
}
const link2 = () => {
  window.location = 'https://www.baidu.com'
}
const list = ref(100)
const loading = ref(false);
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
</script>
<template>
  <div class="">
    <div class="btn  " @click="link1">
      tailwind
    </div>
    <div @click='link2' class="btn1">less</div>
    <!-- <div
      class="btnMoble text-white text-12 rounded-full bg-blue-600 hover:bg-blue-500 w-96 text-center cursor-pointer p-8 ;"
    >
      moble
    </div> -->
  </div>
  <my-btn class="m-4" @click="showBtns = !showBtns">{{ showBtns ? "隐藏" : "展示" }}按钮</my-btn>
  <div class="p-4" v-if="showBtns">
    <div class="">
      <MyBtn :hover-scale="110">默认按钮</MyBtn>
      <MyBtn type="primary">主要按钮</MyBtn>
      <MyBtn type="success">成功按钮</MyBtn>
      <MyBtn type="info">信息按钮</MyBtn>
      <MyBtn type="warning">警告按钮</MyBtn>
      <MyBtn type="danger">危险按钮</MyBtn>
      <MyBtn type="text">文本按钮</MyBtn>
    </div>
    <div class="mt-3">
      <MyBtn is-plain>朴素按钮</MyBtn>
      <MyBtn is-plain type="primary">主要按钮</MyBtn>
      <MyBtn is-plain type="success">成功按钮</MyBtn>
      <MyBtn is-plain type="info">信息按钮</MyBtn>
      <MyBtn is-plain type="warning">警告按钮</MyBtn>
      <MyBtn is-plain type="danger">危险按钮</MyBtn>
    </div>
    <div class="mt-3">
      <MyBtn round>圆角按钮</MyBtn>
      <MyBtn round type="primary">主要按钮</MyBtn>
      <MyBtn round type="success">成功按钮</MyBtn>
      <MyBtn round type="info">信息按钮</MyBtn>
      <MyBtn round type="warning">警告按钮</MyBtn>
      <MyBtn round type="danger">危险按钮</MyBtn>
    </div>
    <div class="mt-3">
      <MyBtn disabled>禁用默认</MyBtn>
      <MyBtn disabled type="primary">主要按钮</MyBtn>
      <MyBtn disabled type="success">成功按钮</MyBtn>
      <MyBtn disabled type="info">信息按钮</MyBtn>
      <MyBtn disabled type="warning">警告按钮</MyBtn>
      <MyBtn disabled type="danger">危险按钮</MyBtn>
      <MyBtn disabled type="text">文本按钮</MyBtn>
    </div>
    <div class="mt-3">
      <MyBtn disabled is-plain>禁用朴素</MyBtn>
      <MyBtn disabled is-plain type="primary">主要按钮</MyBtn>
      <MyBtn disabled is-plain type="success">成功按钮</MyBtn>
      <MyBtn disabled is-plain type="info">信息按钮</MyBtn>
      <MyBtn disabled is-plain type="warning">警告按钮</MyBtn>
      <MyBtn disabled is-plain type="danger">危险按钮</MyBtn>
    </div>
    <div class="mt-3">
      <MyBtn loading size="mini" type="primary">超小按钮</MyBtn>
      <MyBtn loading size="small" type="primary">小型按钮</MyBtn>
      <MyBtn loading type="primary">默认按钮</MyBtn>
      <MyBtn loading size="large" type="primary">大型按钮</MyBtn>
    </div>
    <div class="mt-3">
      <MyBtn loading>朴素按钮</MyBtn>
      <MyBtn loading type="primary">主要按钮</MyBtn>
      <MyBtn loading type="success">成功按钮</MyBtn>
      <MyBtn loading type="info">信息按钮</MyBtn>
      <MyBtn loading type="warning">警告按钮</MyBtn>
      <MyBtn loading type="danger">危险按钮</MyBtn>
    </div>
  </div>
  <input type="number" v-model="list">
  <div class="flex">
    <div class="group">
      <div class=" p-2 peer bg-sky-400 empty:hidden">
        <div v-for="i in list" :key="i">{{ i }}</div>
      </div>
      <div class="hidden peer-empty:block  ">暂无数据</div>
    </div>
    <div>
      <div v-if="list > 0" class=" p-2 peer bg-sky-400">
        <div v-for="i in list" :key="i">{{ i }}</div>
      </div>
      <div v-else>暂无数据</div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
.btn1 {
  color: #fff;
  background: #2463eb;
  text-align: center;
  cursor: pointer;
  border-radius: 9999px;
  font-size: 24px;
  padding: 16px;
  width: 160px;

  &:hover {
    background: #3c82f6;
  }
}

@media screen and (max-width: 1024px) {
  .btn1 {
    font-size: 18px;
    padding: 12px;
    width: 128px;
  }
}

@media screen and (max-width: 750px) {
  .btn1 {
    font-size: 14px;
    padding: 8px;
    width: 96px;
    // @apply text-[28px];
  }
}

.btn {
  @apply text-center border relative border-cyan-200 text-sm md:text-lg lg:text-2xl rounded-sm cursor-pointer w-24 md:w-32 lg:w-40 p-2 md:p-3 lg:p-4;

  &::after {
    @apply block absolute bottom-0 w-0 right-0 h-1 bg-blue-500 transition-all;
    content: '';
  }

  &::before {
    @apply block absolute top-0 w-0 left-0 h-1 bg-blue-500 transition-all;
    content: '';
  }

  &:hover {
    &::after {
      @apply w-full;
    }

    &::before {
      @apply w-full;
    }
  }

}

// .btnMoble{
// @apply text-white
//   text-12
//   rounded-full
//   bg-blue-600 hover:bg-blue-500
//   w-96
//   text-center
//   cursor-pointer
//   p-8;
// }
</style>