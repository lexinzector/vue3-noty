import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

export default defineConfig({
	root: process.env.NODE_ENV === 'development' ? 'dev' : undefined,
	plugins: [
		vue(),
		AutoImport({
			imports: [],
			dts: false
		})
	],
	build: {
		outDir: 'dev/dist', // сборка в dev/dist для GitHub Pages
		emptyOutDir: true,
		lib: {
			entry: resolve(__dirname, 'src/index.js'),
			name: 'Vue3Noty',
			fileName: (format) => `vue3-noty.${format}.js`,
			formats: ['es', 'cjs', 'umd']
		},
		rollupOptions: {
			external: ['vue', 'noty'],
			input: resolve(__dirname, 'dev/index.html'),
			output: {
				globals: {
					vue: 'Vue',
					noty: 'Noty'
				}
			}
		}
	}
})
