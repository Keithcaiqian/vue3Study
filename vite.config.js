import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置路径
  resolve: {
    extensions: ['.js', '.vue', '.json', ".scss",".less"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
