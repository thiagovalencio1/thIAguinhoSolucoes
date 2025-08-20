import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE: o 'base' precisa ser exatamente o nome do repositório no GitHub.
// Isso corrige os assets quando a app roda em https://<usuario>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: '/thIAguinhoSolucoes/',
  // opcional, mas ajuda a evitar 404 em navegação SPA no GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})