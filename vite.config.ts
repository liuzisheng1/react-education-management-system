import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  resolve: {
    alias: {
      "@": _resolve("src")
    }
  },
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
