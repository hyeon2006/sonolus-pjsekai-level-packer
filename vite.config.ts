import { packPath } from '@sonolus/free-pack'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import arraybuffer from 'vite-plugin-arraybuffer'

export default defineConfig({
    plugins: [vue(), arraybuffer()],

    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },

    resolve: {
        alias: {
            '@sonolus/free-pack/pack': packPath,
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('sonolus-next-rush-plus-engine')) {
                        return 'engine-data'
                    }
                    if (id.includes('src/pack/repository')) {
                        return 'repository-data'
                    }
                    if (id.includes('node_modules')) {
                        if (id.includes('vue')) {
                            return 'vue-vendor'
                        }
                        return 'vendor'
                    }
                },
            },
        },
    },
})
