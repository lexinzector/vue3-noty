import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

export default defineConfig({
	base: '/vue3-noty/', // для GitHub Pages
	root: 'dev',
	plugins: [
		vue(),
		AutoImport({
			imports: [],
			dts: false
		})
	],
	build: {
		outDir: 'demo', // сборка в dev/demo для GitHub Pages
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
