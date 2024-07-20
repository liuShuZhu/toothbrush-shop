import { fileURLToPath, URL } from 'node:url'
import * as path  from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { CodeInspectorPlugin } from 'code-inspector-plugin';
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    // host:'192.168.1.140'
  },
  plugins: [
    vue(),
    CodeInspectorPlugin({
      bundler: 'vite',
      editor: "code"
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
      },
    },
    postcss: {
      plugins: [
        require('tailwindcss'), 
        require('autoprefixer'),
        // require('postcss-pxtorem')({
        //   rootValue: 37.5,
        //   selectorBlackList: ['vant', 'mu'],
        //   propList: ['*'],
        //   atRules: ['media'],
        // }),
      ]
    }
  }
})
