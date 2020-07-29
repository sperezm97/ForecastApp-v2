module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:react-native-dotenv',
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
    ],
    plugin: [
      [
        'module-resolver',
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
