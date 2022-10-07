import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import mdx from 'vite-plugin-mdx'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mdx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
