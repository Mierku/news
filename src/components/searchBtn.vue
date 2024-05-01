<script lang="ts" setup>
import { ref } from 'vue'
const keywords = ref('')
</script>
<template>
  <div class="outer-search">
    <input class="inner-search" v-model="keywords" />
    <div class="search-icon">search</div>
  </div>
</template>
<style>
.outer-search {
  display: flex;
  box-sizing: border-box;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 36px;
  padding: 12px 0px 12px 24px;
  width: 100%;
  height: 46px;
}
.inner-search {
  padding: 0 20px;
  height: 100%;
  font-size: 18px;
  flex: 1;
}
.search-icon {
  width: 60px;
}
</style>
