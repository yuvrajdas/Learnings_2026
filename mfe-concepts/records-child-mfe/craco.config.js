const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  webpack: {
    configure: (config) => {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: 'records',
          filename: 'remoteEntry.js',
          exposes: {
            './Records': './src/bootstrap.js',
          },
          shared: {
            react: { singleton: true, requiredVersion: false },
            'react-dom': { singleton: true, requiredVersion: false },
          },
        }),
      );
      config.output.publicPath = 'auto';
      config.optimization.runtimeChunk = false;
      return config;
    },
  },
};
 