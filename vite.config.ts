import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import { minifyHtml } from 'vite-plugin-html';
import VitePluginMacros from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  publicDir: 'public',
  plugins: [
    reactRefresh(),
    VitePluginMacros(),
    VitePWA({
      mode: mode === 'production' ? 'production' : 'development',
      registerType: 'prompt',
      srcDir: 'src',
      filename: 'sw.ts',
      base: '/',
      strategies: 'injectManifest',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
    }),
    minifyHtml(),
  ],
  build: {
    sourcemap: true,
  },
}));
