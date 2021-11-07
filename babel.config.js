module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: './src',
          alias: {
            Config: './src/config',
            Constants: './src/constants',
            Enums: './src/enums',
            Hooks: './src/hooks',
            Redux: './src/redux',
            Screens: './src/screens',
            UI: './src/ui',
          },
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
      ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  };
};
