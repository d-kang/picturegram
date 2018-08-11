import React from 'react';

import {
  SwitchNavigator,
  StackNavigator,
} from 'react-navigation';


import Tabs from './Tabs';
import LoginStack from './LoginStack';

import {
  Login,
  MainFeed,
  Register,
} from '../components/screens';


const MainStack = SwitchNavigator({
  login: LoginStack,
  main: Tabs,
});

export default MainStack;