<script lang="ts" setup>
import { ref } from 'vue'
const comments = ref('')
</script>
<template>
  <div class="article-ctt">
    <div class="info-box"></div>
    <main class="article"></main>
    <aside class="other-wrapper">
      <div class="author-info-wrapper">
        <div class="person-info-box">
          <div class="author-avatar"></div>
          <div class="person-box">
            <div class="author-name">Mierku</div>
            <div class="author-sign">平安喜乐</div>
          </div>
        </div>
        <div class="follow-btn">关注</div>
      </div>
      <div class="comments-wrapper"></div>
      <div class="comments-sendbox">
        <div class="comments-outer-input">
          <input class="inner-input" v-model="comments" />
        </div>
        <button class="comments-btn">发送</button>
      </div>
    </aside>
  </div>
</template>
<style lang="scss" scoped>
.info-box {
  position: sticky;
  left: 20px;
}
.article-ctt {
  display: flex;
  padding: 20px;
  justify-content: center;
  height: 200vh;
  background: rgb(236, 236, 236);
  .article {
    width: 960px;
    height: 100%;
    background: red;
  }
  .other-wrapper {
    width: 400px;
    height: calc(100vh - 60px - 20px);
    background: black;
    position: sticky;
    top: 60px;
    .author-info-wrapper {
      background: #fff;
      height: 60px;
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
    .comments-wrapper {
      height: calc(100% - 100px - 60px);
      background: black;
    }
    .comments-sendbox {
      background: #fff;
      height: 60px;
    }
  }
}
.person-info-box {
  display: flex;

  .author-avatar {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    background: red;
  }
  .person-box {
    margin-left: 12px;
    .author-name {
      font-size: 22px;
      margin-bottom: 6px;
    }
    .author-sign {
      font-size: 14px;
    }
  }
}
.comments-sendbox {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.comments-outer-input {
  height: 36px;
  width: 240px;
  line-height: 36px;
  border: 1px solid rgb(232, 232, 232);
  background: rgb(233, 233, 233);
  border-radius: 24px;
  padding: 0 20px;
  .inner-input {
    width: 100%;
    background: none;
  }
}
.comments-btn {
  margin-left: 12px;
  border: 1px solid rgb(232, 232, 232);
  height: 36px;
  width: 45px;
  border-radius: 24px;
}
</style>
