import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    watch: {
        usePolling: true
    }
  }
})
 