import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      // --- Google Style Guide Core Rules ---
      'indent': ['error', 2],               // Google uses 2-space indentation
      'quotes': ['error', 'single'],         // Google prefers single quotes
      'semi': ['error', 'always'],           // Semicolons are required
      'max-len': ['error', { 'code': 80 }],  // Google's 80-character limit
      'no-var': 'error',                     // Google forbids 'var'
      'prefer-const': 'error', // Google prefers 'const' over 'let'
      'curly': ['error', 'all'], // Google requires braces for all blocks
      // Trailing commas in multiline
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
]);
