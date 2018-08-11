import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  SwitchNavigator,
  StackNavigator,
  TabNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import {
  Login,
  MainFeed,
  Camera,
  Profile,
  Search,
  Likes,
} from './components/screens';
import SIcon from 'react-native-vector-icons/FontAwesome';
import RIcon from 'react-native-vector-icons/FontAwesome5';
import vars from './styles/vars'



const Tabs = createBottomTabNavigator(
  {
    feed: MainFeed,
    search: Search,
    camera: Camera,
    likes: Likes,
    profile: Profile,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const icons = {
          feed: 'home',
          search: 'search',
          camera: 'camera',
          likes: 'heart',
          profile: 'user',
        };

        const iconName = icons[routeName];
        return <SIcon name={iconName} size={30} color={vars.$black1} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

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
