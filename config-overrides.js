  
const path = require('path');
const { override, 
  addBabelPlugins, 
  babelInclude, 
  addWebpackAlias 
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  babelInclude([
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'node_modules/@react-navigation'),
    path.resolve(__dirname, 'node_modules/react-navigation'),
    path.resolve(__dirname, 'node_modules/react-native-gesture-handle'),
    path.resolve(__dirname, 'node_modules/react-navigation-stack'),
    path.resolve(__dirname, 'node_modules/react-native-reanimated'),
    path.resolve(__dirname, 'node_modules/react-native-screens'),
    path.resolve(__dirname, 'src'),
  ]),
  addWebpackAlias({
    ["App"]: path.resolve(__dirname, "src"),
    ["Config"]: path.resolve(__dirname, "src/Config"),
  }),
);