import { defineConfig } from "vitest/config"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '~formjs-vue3': resolve(__dirname, './src'),
            'formjs-core': resolve(__dirname, '../core/src'),
        },
    },
    test: {
        globals: true,
        environment: "jsdom"
    }
})
