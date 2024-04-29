module.exports = {
  // presets: ['module:metro-react-native-babel-preset'],
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['module:@react-native/babel-preset'],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@constants': './src/constants',
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@config': './src/config',
          '@providers': './src/providers',
          '@services': './src/services',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@contexts': './src/contexts',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@routes': './src/routes',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@shared': './src/shared',
          '@components': './src/components',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
