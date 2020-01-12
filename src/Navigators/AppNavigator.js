// import {
//   createNavigator,
//   SwitchRouter,
//   SceneView,
//   getActiveChildNavigationOptions
// } from "@react-navigation/core";
import { createBrowserApp, Link } from "@react-navigation/web";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import SplashScreen from '../Containers/SplashScreen/SplashScreen';
import TabNavigator from '../Navigators/TabNavigator';
import LoginScreen from '../Containers/Login';
import SearchScreen from '../Containers/Search';
import DetailScreen from '../Containers/DetailProduct';
window.__DEV__ = true;
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    Login : {
      screen: LoginScreen,
      path: 'login'
    },
    Home : {
      screen :TabNavigator,
      path: ''
    },
    Search: {
      screen: SearchScreen,
      path: 'search'
    },
    Detail: {
      screen: DetailScreen,
      path: 'detail/'
    }
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
    lazyLoad: true,
  }
);

const ContainerApp = Platform.OS === 'web' ? createBrowserApp(StackNavigator) : createAppContainer(StackNavigator);
export default ContainerApp;
