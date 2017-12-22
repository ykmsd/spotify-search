module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "hrefLeft", "hrefRight", "to" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ]
      }]
  },
};