<script lang="ts" setup>
import { reactive, ref, defineEmits } from 'vue'
import { useToken } from '@/stores/useToken'
import { storeToRefs } from 'pinia'
const navMain = ref([
  { name: '首页', url: '/home' },
  { name: 'NBA', url: '' },
  { name: 'CBA', url: '' },
  { name: '社区', url: '' }
])
const emit = defineEmits(['openSign'])
const { token } = storeToRefs(useToken())
function Login() {}
function openSign() {
  emit('openSign', true)
}
</script>
<template>
  <header class="layout-header">
    <nav class="header-left">
      <div class="header-left-item" v-for="item in navMain" :key="item.name">{{ item.name }}</div>
    </nav>
    <div class="header-right">
      <div></div>
      <button v-if="token.length <= 0" class="header-sign" @click="openSign">登录/注册</button>
      <div v-else class="header-avatar" @click="Login()"></div>
    </div>
  </header>
</template>
<style lang="scss">
.layout-header {
  box-sizing: border-box;
  position: sticky;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  border-top: 1px solid #e8e8e8;
  height: 60px;
  padding: 0 20px;
}
.header-left {
  display: flex;
  height: 100%;
  line-height: 60px;
  font-size: 18px;
  .header-left-item {
    padding: 0 20px;
  }
}
.header-right {
  line-height: 60px;
}
.header-avatar {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: red;
}
.header-sign {
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 20px;
  border-radius: 6px;
  font-size: 16px;
  color: white;
  background: rgb(255, 23, 23);
  border: 1px solid rgb(255, 23, 23);
  &:hover {
    cursor: pointer;
    background: rgb(255, 23, 23, 0.4);
    border: 1px solid rgb(255, 23, 23);
  }
}
</style>
