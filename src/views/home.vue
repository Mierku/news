<script lang="ts" setup>
import searchBtn from '@/components/searchBtn.vue'
import card1 from '@/components/Card1.vue'
</script>
<template>
  <header class="home-header">
    <searchBtn></searchBtn>
    <div class="home-recommend">推荐</div>
  </header>
  <section>
    <div class="news-display">
      <card1 @click="openDetails()" v-for="item in 12"></card1>
    </div>
  </section>
</template>

<style lang="scss">
.home-header {
  display: flex;
  margin-bottom: 20px;
  .home-recommend {
    width: 96px;
    height: 46px;
    border-radius: 24px;
    border: 1px solid #e8e8e8;
    font-size: 18px;
    line-height: 46px;
    text-align: center;
    margin-left: 12px;
  }
}
.news-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>
