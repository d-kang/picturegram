import React from 'react';

import {
  SwitchNavigator,
} from 'react-navigation';

import Tabs from './Tabs';

import {
  Login,
  MainFeed,
} from '../components/screens';

const MainStack = SwitchNavigator({
  login: Login,
  main: Tabs,
});

export default MainStack;