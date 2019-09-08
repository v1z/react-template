const appConfig = require('../webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config }) => {
  config.entry = ['./src/styles/default.css', ...config.entry];
  config.resolve = {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  };

  config.module.rules = appConfig.module.rules;

  // enable story source addon
  config.module.rules.push({
    test: /\.stories\.(t|j)sx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.plugins = [...config.plugins, new MiniCssExtractPlugin()];

  return config;
};
