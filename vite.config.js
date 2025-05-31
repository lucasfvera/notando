import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';

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
		plugins: [react(), tsconfigPaths(), eslint()],
		server: {
			port: 3000,
		},
	};
});
