import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router'
const router = useRouter()

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL:"",
  timeout:1000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    if (store.getters.token) {
      config.headers['X-Token'] = getToken();
    }
    return config
  },
  (err) => Promise.reject(err)
)

//响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code ===1) {
      return res
    }
    ElMessage.error()
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
export {baseURL}