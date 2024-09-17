import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './src/components/app/App';
import store from './src/redux/store'; // Import the store
import { name as appName } from './app.json';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);