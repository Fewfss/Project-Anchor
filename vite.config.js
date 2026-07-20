import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: troque pelo nome do seu repositório no GitHub.
  // Se o repo for github.com/seu-usuario/site-aniversario-mae,
  // deixe como está. Se tiver outro nome, ajuste aqui também.
  base: '/site-aniversario-mae/',
  server: {
    watch: {
      ignored: ['**/public/**']
    }
  }
})
