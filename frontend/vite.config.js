import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/bookApi' : {
        target: 'https://ndlsearch.ndl.go.jp/thumbnail'
      },
      '/api' : {
        target: 'http://localhost:3000'
      }
    }
  }
})
