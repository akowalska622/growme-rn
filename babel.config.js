module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          Constants: './src/constants',
        },
      }],
      ['@babel/plugin-transform-react-jsx', {
        runtime: 'automatic',
      }],
    ],
  };
};
