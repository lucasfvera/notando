//@ts-check

import reactPlugin from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config([
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		settings: {
			react: { version: 'detect' },
		},
		extends: [
			eslint.configs.recommended,
			tseslint.configs.recommended,
			reactPlugin.configs.flat.recommended,
			reactPlugin.configs.flat['jsx-runtime'],
		],
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
]);
