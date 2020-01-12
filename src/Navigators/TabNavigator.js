import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../Containers/Home';
import FeedScreen from '../Containers/Feed';
import CartScreen from '../Containers/Cart';
import PurchasedHistory from '../Containers/PurchasedHistory';
window.__DEV__ = true;

const TabNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomeScreen,
      path: 'home'
    },
    Feed: {
      screen: FeedScreen,
      path: 'feed'
    },
    Cart: {
      screen: CartScreen,
      path: 'cart'
    },
    Profile: {
      screen: PurchasedHistory,
      path: 'profile'
    }
  },
  {
    lazy: true,
  }
);

HomeScreen.navigationOptions = {
  title:'Home'
}

FeedScreen.navigationOptions = {
  title:'Feed'
}

CartScreen.navigationOptions = {
  title:'Cart'
}

PurchasedHistory.navigationOptions = {
  title:'Profile'
}

export default TabNavigator;
