module.exports = ({ config }) => {
  // postCSS fix - https://github.com/storybooks/storybook/issues/6319
  config.module.rules = config.module.rules.filter(f => f.test.toString() !== '/\\.css$/');

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]',
          },
        },
        'postcss-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    },
    {
      test: /\.stories\.(js|jsx)$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    },
  ];

  return config;
};
