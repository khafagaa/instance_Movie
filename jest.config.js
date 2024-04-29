module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '@constants': './src/constants',
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
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs'],
  // transform: {'^.+\\.ts$': 'ts-jest'},
  moduleDirectories: [
    'node_modules',
    'utils', // a utility folder
    __dirname, // the root directory
  ],
  transformIgnorePatterns: [
    // 'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    // '/node_modules/@react-navigation/stack/node_modules/@react-navigation/elements/lib/commonjs/assets',
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-redux)/)',
  ],
};
