/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
  ////  redundant since its already delcared in tsconfig.json + using tsconfigPaths() plugin
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     '@assets': path.resolve(__dirname, './src/assets')
  //   }
  // }
})
