import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import taildwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    taildwindcss()
],
})
