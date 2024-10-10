import axios from 'axios'
import { ElMessage } from 'element-plus'
// import useStore from 'element-plus/es/components/table/src/store/index.mjs'
import { useRouter } from 'vue-router'

// const useStore = useUserStore()
const router = useRouter()


const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL:"http://192.168.43.174:8080", 
  headers: {
    'Content-Type': 'application/json'
},
  timeout:2000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {

    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code ===1) {
      return res.data
    }
    alert("error")
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance