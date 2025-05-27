import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
	return {
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './setupTests.js',
		},
		build: {
			outDir: 'build',
		},
		plugins: [react()],
	};
});
