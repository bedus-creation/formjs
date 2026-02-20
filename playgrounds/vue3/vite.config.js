import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import { viteMockServe } from "vite-plugin-mock"

export default defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            mockPath: "api",
            localEnabled: true,
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
})
