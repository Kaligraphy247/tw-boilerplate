// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                  // add al the pages required here.
                 // use the format below to add your page.
                // see https://vitejs.dev/guide/build.html#multi-page-app for more info
                main: resolve(__dirname, 'index.html'),
                // admin: resolve(__dirname, 'admin.html'),
            },
        },
    },
})
