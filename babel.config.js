module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@types': './src/types',
          },
        },
      ],
    ],
  };
};
