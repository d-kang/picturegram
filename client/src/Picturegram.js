import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  SwitchNavigator,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import {
  Login,
  MainFeed,
  Camera,
  Profile,
} from './components/screens';
import SIcon from 'react-native-vector-icons/FontAwesome';
import RIcon from 'react-native-vector-icons/FontAwesome5';
import vars from './styles/vars'


const Tabs = TabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile,
})

const MainStack = SwitchNavigator({
  login: Login,
  main: MainFeed,
});


class Picturegram extends Component {

  render() {
    return <Tabs />;
  }
}



export default Picturegram;
