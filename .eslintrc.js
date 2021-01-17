module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "directory": "path/to/folder"
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      "typescript": {
        "directory": "packages/*/tsconfig.json"
      },

      // use an array
      "typescript": {
        "directory": [
          "packages/module-a/tsconfig.json",
          "packages/module-b/tsconfig.json"
        ]
      },

      // use an array of glob patterns
      "typescript": {
        "directory": [
          "packages/*/tsconfig.json",
          "other-packages/*/tsconfig.json"
        ]
      }
    }
  }
};
