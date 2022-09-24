import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/MoneyManager/dist/',    //部署到github时才用
  plugins: [vue()]
})
