import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'NOJA - The Bulk Purchase Marketplace',
        short_name: 'NOJA',
        description: 'Make Bulk Purchases, split the cost with other buyers, more value and more savings for you',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
