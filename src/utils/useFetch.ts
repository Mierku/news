import { createFetch, useFetch } from '@vueuse/core'
import { useToken } from '@/stores/useToken'
// const usePermission = (url) =>
//   useFetch(
//     url,
//     {
//       async beforeFetch({ url, options, cancel }) {
//         const token = await getMyToken()
//         if (!token) cancel()
//         options.headers = {
//           ...options.headers,
//           Authorization: `Bearer${token}`
//         }
//         return {
//           options
//         }
//       }
//     },
//     {}
//   )
interface options {
  body?: BodyInit | null
  headers?: HeadersInit
  method?: string
  credentials?: RequestCredentials
}
const baseFetch = createFetch({
  baseUrl: 'http://127.0.0.1:4523',
  options: {
    // async beforeFetch({ options }) {
    //   const myToken = await getMyToken()
    //   options.headers.Authorization = `Bearer ${myToken}`
    //   return { options }
    // }
  },
  fetchOptions: {
    mode: 'cors',
    method: 'POST'
  }
})

const useNewFetch = (URL: string, options: options) => {
  const { body, method, credentials, headers } = options
  return baseFetch(
    URL,
    {
      body: JSON.stringify(body),
      method,
      credentials,
      headers
    },
    {
      async beforeFetch({ options, cancel }) {
        options.headers = {
          ...options,
          Authorization: `Bearer ${token}`
        }
      }
    }
  )
}
// const usePermisson = useNewFetch(URL)
const usePermission = (form) => {
  const { setToken } = useToken()
  const { username, password } = form
  if (username === 'mierku' && password === '123456') {
    setToken('mierku')
    sessionStorage.setItem('token', '123456')
    return true
  }
  return false
}
export default usePermission
