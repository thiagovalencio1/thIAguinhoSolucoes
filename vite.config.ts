import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Define o caminho base para o deploy no GitHub Pages.
  // Esta é a única configuração de caminho necessária.
  base: '/thIAguinhoSolucoes/', 
  plugins: [react()],
});
