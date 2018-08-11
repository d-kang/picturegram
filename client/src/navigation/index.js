import React from 'react';
import { SwitchNavigator } from 'react-navigation';

import Tabs from './Tabs';
import LoginStack from './LoginStack';
import { Loading } from '../components/screens';


const MainStack = SwitchNavigator({
  loading: Loading,
  login: LoginStack,
  main: Tabs,
});

export default MainStack;