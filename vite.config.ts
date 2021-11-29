import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import {vueI18n} from "@intlify/vite-plugin-vue-i18n";
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: true,
        sourcemap: "inline"
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    plugins: [
        vue(),
        vueI18n({
            defaultSFCLang: "json",
            compositionOnly: false,
        })],
})
