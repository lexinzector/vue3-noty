import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	root: 'dev', // корень — демо проект
	plugins: [
		vue(),
		AutoImport({ imports: [], dts: false }),
	],
	build: {
		outDir: 'demo', // куда складывать собранный демо
		emptyOutDir: true,
	},
	base: '/vue3-noty/', // для GitHub Pages
});
