// .storybook/main.js
const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-sass-postcss",
  ],
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, "../src"));
    return config;
  },
};
