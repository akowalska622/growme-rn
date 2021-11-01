module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: './src',
          alias: {
            Constants: './src/constants',
            Screens: './src/screens',
          },
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
          path: '.env',
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
