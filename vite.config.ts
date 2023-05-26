import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {svgstore} from './src/vite_plugins/svgstore'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

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
      Components({
        resolvers: [VantResolver()],
    }),
  ]
})
