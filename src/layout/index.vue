<script setup lang="ts">
import HeaderComp from './componets/header.vue'
import AsideComp from './componets/aside.vue'
import Login from '@/components/Login.vue'
import { reactive, ref, defineEmits } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const login = ref()
const isShow = ref<Boolean>(false)
function openSign(isShow: Boolean) {
  login.value.isShow = isShow
}
</script>

<template>
  <header-comp @click="openSign"> </header-comp>
  <div class="outer-container" style="display: flex" v-if="$route.name === 'home'">
    <aside-comp></aside-comp>
    <main class="right-container">
      <slot name="container"></slot>
    </main>
  </div>

  <template v-else>
    <slot name="container"></slot>
  </template>
  <div class="global-components-layout">
    <Login ref="login" :isShow="isShow"></Login>
  </div>
</template>

<style scoped>
.global-components-layout {
}
.right-container {
  padding: 20px;
  width: calc(100vw - 340px);
}
</style>
