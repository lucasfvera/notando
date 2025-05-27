import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

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
		plugins: [react(), tsconfigPaths()],
		server: {
			port: 3000,
		},
	};
});
