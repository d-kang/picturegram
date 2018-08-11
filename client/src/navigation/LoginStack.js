import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
  Login,
  Register,
} from '../components/screens';

const LoginStack = StackNavigator({
  register: {
    screen: Register,
    navigationOptions: () => ({
      title: `Register`,
      headerBackTitle: null
    }),
  },
  login: {
    screen: Login,
    navigationOptions: () => ({
      title: `Login`,
      headerBackTitle: null
    }),
  },
});

export default LoginStack;