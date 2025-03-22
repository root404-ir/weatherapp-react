import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.html'
    },
    cssCodeSplit: true
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['robots.txt',
        'bg/wp10934490-hot-weather-wallpapers.jpg',
        'fonts/kalameh/KalamehWeb-Regular.woff'
      ],
      manifest: {
        name: 'weather pwa',
        short_name: 'weather pwa',
        description: 'برنامه پیش بینی هوا',
        theme_color: '#fff',
        background_color: '#fff',
        display: 'standalone',
        icons: [
          {
            src: '/assets/reshot-icon-weather-8CKJB9YN7X.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|woff2|woff|css)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 روز
              },
            },
          },
        ],
      }
    })
  ],
})
