module.exports = {
  ignorePatterns: ["package*", ".npmrc", "*.md", ".*", "__tests__"],
  extends: [
    "eslint:recommended",
    "airbnb-base"
  ],
  "rules": {
    "linebreak-style": ["error", "windows"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
      }
    ]
  }
};