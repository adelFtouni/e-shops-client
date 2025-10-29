import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/client-e-shops/',  // Adjust this to match your GitHub repo name
  plugins: [
    tailwindcss(),
  ],
})
