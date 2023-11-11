import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bookstorereact/', // add this property and the value is the name of your repositor
  plugins: [react()],
})
