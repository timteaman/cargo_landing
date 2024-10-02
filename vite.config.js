import { defineConfig } from 'vite';
import vituum from 'vituum';
import posthtml from '@vituum/vite-plugin-posthtml';
import postcss from '@vituum/vite-plugin-postcss';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  plugins: [
    vituum(),
    postcss(),
    posthtml({
      root: './src',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/favicon/**/*',
          dest: '',
        },
      ],
    }),
    {
      name: 'custom-hmr',
      enforce: 'post',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html')) {
          server.ws.send({
            type: 'full-reload',
            path: '*',
          });
        }
      },
    },
  ],

  build: {
    root: './src',
    manifest: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          const extension = asset.name.split('.').pop();
          switch (extension) {
            case 'css':
              return 'css/[name].[hash][extname]';
            case 'png':
            case 'jpg':
            case 'webp':
            case 'svg':
              return 'images/[name].[hash][extname]';
            case 'woff2':
              return 'fonts/[name].[hash][extname]';
            case 'webmanifest':
            case 'ico':
              return 'icons/[name].[hash][extname]';
            default:
              return 'assets/[name][extname]';
          }
        },
        preserveEntrySignatures: 'strict',
      },
    },
  },
});
