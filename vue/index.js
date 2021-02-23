"use strict";

module.exports = {
  plugins: ["vue"],
  parser: "vue-eslint-parser",
  rules: {
    // Eslint Stylistic Issues - https://eslint.org/docs/rules/#stylistic-issues
    "semi": ["error", "never"],

    // Eslint plugin vue Issues - https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    "vue/no-async-in-computed-properties": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-parsing-error": "error",
    "vue/no-reserved-keys": "error",
    "vue/no-shared-component-data": "error",
    "vue/no-side-effects-in-computed-properties": "error",
    "vue/no-template-key": "error",
    "vue/no-textarea-mustache": "error",
    "vue/no-unused-components": "error",
    "vue/no-unused-vars": "error",
    "vue/no-use-v-if-with-v-for": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-render-return": "error",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-computed-property": "error",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-text": "error",
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/html-closing-bracket-spacing": "error",
    "vue/html-end-tags": "error",
    "vue/html-indent": "error",
    "vue/html-self-closing": "error",
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-multi-spaces": "error",
    "vue/no-template-shadow": "error",
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/require-default-prop": "error",
    "vue/require-prop-types": "error",
    "vue/v-bind-style": "error",
    "vue/v-on-style": "error",
    "vue/attributes-order": "error",
    "vue/html-quotes": ["error", "single"],
    "vue/no-v-html": "warn",
    "vue/order-in-components": "error",
    "vue/this-in-template": ["error", "never"],
    "vue/component-name-in-template-casing": ["error",
      "kebab-case",
      {
        "ignores": []
      }
    ],
    "vue/multiline-html-element-content-newline": "error",
    "vue/no-spaces-around-equal-signs-in-attribute": "error",
    "vue/script-indent": "error",
    "vue/singleline-html-element-content-newline": "off",
    "prettier/prettier": ["error",
      {
        "printWidth": 110,
        "singleQuote": true,
        "semi": false
      }
    ]
  }
};
