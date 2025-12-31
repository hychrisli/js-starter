import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'], plugins: { js },
    extends: ['js/recommended'], languageOptions: { globals: globals.browser },
    rules: {
      // --- Google Style Guide Core Rules ---
      'indent': ['error', 2],               // 2-space indentation
      'quotes': ['error', 'single'],         // Single quotes
      'semi': ['error', 'always'],           // Mandatory semicolons
      'max-len': ['error', { 'code': 80 }],  // 80-character limit
      'no-var': 'error',                     // Use let/const
      'prefer-const': 'error',               // Use const when possible
      'curly': ['error', 'all'],          // Braces for all control statements
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
]);
