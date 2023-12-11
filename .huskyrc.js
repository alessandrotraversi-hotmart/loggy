module.exports = {
  hooks: {
    "pre-commit": "npm lint",
    "commit-msg": "npx --no -- commitlint --edit ${1}",
  },
};
