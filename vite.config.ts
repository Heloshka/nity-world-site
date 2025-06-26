import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nity-world-site/', // 👈 ОБОВʼЯЗКОВО для GitHub Pages
  plugins: [react()],
})
