import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: '/src',
			types: '/src/types',
			assets: '/src/assets',
			fonts: '/src/fonts',
			components: '/src/components',
		},
	},
});
