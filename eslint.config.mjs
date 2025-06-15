// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import filenamesPlugin from 'eslint-plugin-filenames'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [...compat.extends(
  'next/core-web-vitals',
  'next/typescript',
  'plugin:@typescript-eslint/recommended',
  'next/core-web-vitals',
  'next'
), {
  plugins: {
    filenames: filenamesPlugin,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // any 타입 허용
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],


  },
  },
  ...storybook.configs["flat/recommended"],
  {
    ignores: [
      ".next",
      "node_modules",
      "dist", 
      "build",
      "public",
    "src/styles",
    "src/lib",
  ],
},
]

export default eslintConfig
