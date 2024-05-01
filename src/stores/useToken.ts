import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToken = defineStore('token', () => {
  const token = ref('')

  function setToken(newToken: string) {
    sessionStorage.setItem('token', newToken)
    token.value = newToken
  }

  return { token, setToken }
})
