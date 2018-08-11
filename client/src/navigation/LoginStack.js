import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
  Login,
  Register,
} from '../components/screens';

const LoginStack = StackNavigator({
  login: {
    screen: Login,
    navigationOptions: () => ({
      title: `Login`,
      headerBackTitle: null
    }),
  },
  register: {
    screen: Register,
    navigationOptions: () => ({
      title: `Register`,
      headerBackTitle: null
    }),
  },
});

export default LoginStack;