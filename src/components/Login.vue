<script lang="ts" setup>
import type { Rules } from 'async-validator'
import { reactive, ref, defineProps, defineExpose } from 'vue'
import usePermission from '@/utils/useFetch'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

const form = reactive({ username: '', password: '' })
const isShow = ref(false)
// const { isShow } = defineProps(['isShow'])
const rules: Rules = {
  username: {
    type: 'string',
    min: 5,
    max: 20,
    required: true
  },
  password: {
    type: 'number',
    required: true
  }
}
const { pass, isFinished, errorFields } = useAsyncValidator(form, rules)

defineExpose({
  isShow
})
function handleLogin() {
  if (usePermission(form) === true) {
    isShow.value = false
  }
  console.log(errorFields, isFinished, pass)
}
function closeDialog() {
  isShow.value = false
}
function openDialog() {
  isShow.value = true
}
</script>
<template>
  <div class="dialog-box" v-if="isShow">
    <div class="Login-wrapper">
      <div class="login-header">
        <div class="login-title">登录畅享优质权益</div>
        <svg
          width="26px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="closeDialog()"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
            fill="#8a919f"
          />
        </svg>
      </div>
      <div class="title-line"></div>
      <div class="outer-input">
        <input class="inner-input" v-model="form.username" placeholder="请输入用户名" />
      </div>
      <div class="outer-input">
        <input
          type="password"
          class="inner-input"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </div>
      <div class="btn-wrapper">
        <button class="register-btn btn">注册</button>
        <button class="login-btn btn" @click="handleLogin">登录</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dialog-box {
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-header {
  display: flex;
  justify-content: space-between;
}
.Login-wrapper {
  padding: 24px 20px;
  background: #fff;
  height: 240px;
  width: 600px;
  border-radius: 12px;

  .outer-input {
    margin-bottom: 24px;
  }
  .login-title {
    font-size: 22px;
  }
  .title-line {
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background: rgb(232, 232, 232);
  }
}
.outer-input {
  box-sizing: border-box;
  height: 36px;
  width: 240px;
  line-height: 36px;
  border: 1px solid rgb(232, 232, 232);
  background: rgb(243, 243, 243);
  border-radius: 6px;
  padding: 0 20px;
  .inner-input {
    width: 100%;
    background: none;
  }
}
.btn-wrapper {
  display: flex;
  width: 240px;
  justify-content: space-between;
}
.btn {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: red;
  color: white;
  font-size: 14px;
  font-weight: 600;
  width: 106px;
  border-radius: 24px;
  &.register-btn {
    border: 1px solid rgb(255, 23, 23);
    background: rgb(255, 115, 115);
  }
}
</style>
