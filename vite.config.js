import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import {fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
  resolve: {
      alias: {
        'src/#components': resolve(dirname(fileURLToPath(import.meta.url)), 'components'),
          'src/#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'constants'),
          'src/#store': resolve(dirname(fileURLToPath(import.meta.url)), 'store'),
          'src/#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'hoc'),
          'src/#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'windows'),

      }
  }
})
