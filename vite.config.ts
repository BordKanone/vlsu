// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-react-svg';
import vitePluginImp from 'vite-plugin-imp';
import nodePolyfills from 'vite-plugin-node-stdlib-browser';

export default defineConfig({
  build: {
    outDir: './build',
    sourcemap: false,
    target: 'es2020',
    commonjsOptions: {
      sourceMap: false,
      transformMixedEsModules: true,
    },
  },
  plugins: [
    svgr(),
    react(),
    // EnvironmentPlugin('all', { prefix: 'VITE_APP_' }),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    nodePolyfills(),
  ],
  server: {
    host: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      supported: { bigint: true },
      plugins: [],
    },
  },
});
