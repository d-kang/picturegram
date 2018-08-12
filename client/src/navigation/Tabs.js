import React from 'react';
import {
  SwitchNavigator,
  StackNavigator,
  TabNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SIcon from 'react-native-vector-icons/FontAwesome';
import RIcon from 'react-native-vector-icons/FontAwesome5';
import vars from '../styles/vars';

import {
  Login,
  MainFeed,
  Camera,
  Profile,
  Search,
  Likes,
} from '../components/screens';


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
        return <SIcon
          name={iconName}
          size={30}
          color={tintColor}
        />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(36,36,36)',
      inactiveTintColor: 'rgb(165,165,165)',
      showLabel: false,
    },
  }
)

export default Tabs;