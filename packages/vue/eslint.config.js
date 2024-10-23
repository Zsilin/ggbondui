import antfu from "@antfu/eslint-config";

// 常见vue项目中的最佳实践规则
export default antfu({
  ignores: [
    "/dist",
    "/node_modules",
    "/packages/**/dist",
    "/packages/**/node_modules",
  ],
  rules: {
    "ts/no-non-null-asserted-optional-chain": "off",
    "ts/ban-ts-comment": "warn",
    "ts/consistent-type-definitions": "off",
    "import/first": "off",
    "import/order": "off",
    "symbol-description": "off",
    "no-console": "warn",
    "max-statements-per-line": ["error", { max: 2 }],
    "vue/one-component-per-file": "off",
    "style/quotes": "off",
    "style/semi": "off",
  },
});
