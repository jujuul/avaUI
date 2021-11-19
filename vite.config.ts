import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // alias: [
    //   {
    //     find: '@',
    //     replacement: path.resolve(__dirname, 'src'),
    //   },
    //   {
    //     find: '~',
    //     replacement: path.resolve(__dirname, 'src'),
    //   },
    // ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "~/packages/theme-chalk/src/index.scss" as *;`,
  //     },
  //   },
  // },
  plugins: [vue()],
});
