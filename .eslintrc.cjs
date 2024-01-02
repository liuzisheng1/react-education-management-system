module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier"
    ],
    "rules": {
       "prettier/prettier": "error",
        // 强制使用箭头函数 instead of binding
        "arrow-body-style": "off",
        // 强制使用箭头函数 instead of binding
        "prefer-arrow-callback": "off",
        // 强制使用 React.createElement instead of JSX
        "react/react-in-jsx-scope": "off"
    }
}
