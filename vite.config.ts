import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import { minifyHtml } from 'vite-plugin-html';
import VitePluginMacros from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [
    reactRefresh(),
    VitePluginMacros(),
    VitePWA({
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'PWA Starter',
        short_name: 'PWA Starter',
        description: 'A simple PWA starting kit with react',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'images/android-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'images/android-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'images/android-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    minifyHtml(),
  ],
  build: {
    sourcemap: true,
  },
}));
