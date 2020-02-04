import { createBrowserApp } from '@react-navigation/web';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';

import MainAppTabNavigator from './src/MainAppTabNavigator';

const createApp = Platform.select({
  web: createBrowserApp,
  default: createAppContainer,
});

export default createApp(MainAppTabNavigator);
