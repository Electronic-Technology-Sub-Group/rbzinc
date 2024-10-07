import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  
})
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://backend.server.com', // 目标后端服务器地址
//         changeOrigin: true, // 改变源地址，使得服务器相信请求来自于代理地址
//         pathRewrite: {
//           '^/api': '' // 重写路径，去除`/api`
//         }
//       }
//     }
//   }
// };


