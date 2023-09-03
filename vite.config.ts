import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1995,
    host: true,
    open: true,
  },
  plugins: [
    checker({ typescript: true }), 
    svgr(), 
    tsconfigPaths(),
    react()
  ],
  build: {
    target: 'esnext',
  },
})
