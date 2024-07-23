import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mass/',
  plugins: [react()],
  server: {
    watch: {
        usePolling: true
    }
  }
})
 