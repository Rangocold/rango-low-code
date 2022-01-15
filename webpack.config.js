const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../build');
const ENTRY_DIR = path.resolve(__dirname, './src');
const ReactRefreshTypeScript = require('react-refresh-typescript');
module.exports = function() {
  const scope = '[path][name]__[local]_[hash:base64]';
  return {
    mode: 'development',
    entry: [ENTRY_DIR],
    devtool: 'eval-source-map',
    devServer: {
      contentBase: BUILD_DIR,
      hot: true,
      port: 8621,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          include: ENTRY_DIR,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                happyPackMode: true,
                // https://github.com/pmmmwh/react-refresh-webpack-plugin#with-ts-loader
                getCustomTransformers: () => ({
                  before: [ReactRefreshTypeScript()],
                }),
              },
            },
            {
              test: /\.(js|jsx)$/,
              include: ENTRY_DIR,
              exclude: /(node_modules|bower_components)/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    cacheCompression: false,
                    cacheDirectory: true,
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                      '@babel/plugin-proposal-object-rest-spread',
                      '@babel/plugin-proposal-class-properties',
                      [
                        'react-css-modules',
                        {
                          generateScopedName: scope,
                          filetypes: {
                            '.scss': {
                              syntax: 'postcss-scss',
                            },
                          },
                        },
                      ],
                      [
                        require.resolve('react-refresh/babel'),
                      ],
                      '@babel/plugin-transform-react-jsx-source',
                    ].filter(Boolean),
                  },
                },
              ],
            },
          ],
        },
      ]
    }
  }
}