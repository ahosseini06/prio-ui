module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        "@babel/plugin-transform-private-methods",    ],
  };   

  overrides: [
    {
      test: './node_modules/ethers',
      plugins: [
        ["@babel/plugin-transform-private-methods", { "loose": true }]
      ]
    }
  ]