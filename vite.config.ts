import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {svgstore} from './src/vite_plugins/svgstore'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/MoneyManager/dist/',    //部署到github时才用
  plugins: [
      vue(),
      vueJsx({
        transformOn: true,
        mergeProps: true,
    }),
      svgstore(),
    styleImport({
      resolves: [VantResolve()],
    }),

  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://121.196.236.94:8080/'
      }
    }
  }
})
