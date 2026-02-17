import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
	build: {
		outDir: 'dist',
		lib: {
			entry: resolve(__dirname, 'src/index.js'),
			name: 'Vue3Noty',
			fileName: (format) => `vue3-noty.${format}.js`,
			formats: ['es', 'cjs', 'umd'],
		},
		rollupOptions: {
			external: ['vue', 'noty'], // Vue и Noty не включаем в библиотеку
			output: {
				globals: {
					vue: 'Vue',
					noty: 'Noty',
				},
			},
		},
	},
});
