import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.50.81:9002",
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
