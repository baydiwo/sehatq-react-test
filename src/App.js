import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import createStore from "./Stores";
import RootScreen from "./Containers/Root/RootScreen";
import { ThemeProvider } from "react-native-elements";
import { StatusBar, ActivityIndicator } from "react-native";
import { axiosInstance } from "./Services/API";
import { Colors } from "./Theme";

const { store, persistor } = createStore();

const theme = {
  colors: {
    primary: Colors.primary,
    secondary: Colors.darkPrimary,
    divider: Colors.divider
  },
  Button: {
    titleStyle: {
      color: Colors.white
    },
    raised: true
  },
  Text: {
    style: {
      color: Colors.text
    }
  }
};

export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <StatusBar backgroundColor="#FFC804" barStyle="light-content" />
            <RootScreen />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
