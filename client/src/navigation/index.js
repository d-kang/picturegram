import React from 'react';
import { SwitchNavigator } from 'react-navigation';

import Tabs from './Tabs';
import LoginStack from './LoginStack';


const MainStack = SwitchNavigator({
  login: LoginStack,
  main: Tabs,
});

export default MainStack;