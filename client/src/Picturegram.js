import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SIcon from 'react-native-vector-icons/FontAwesome';
import RIcon from 'react-native-vector-icons/FontAwesome5';
import { PostFeed } from './components/container';
import vars from './styles/vars'

class Picturegram extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.header}>Picturegram</Text>

          <View style={{ position: 'absolute', right: 20, }}>
            <RIcon name="paper-plane" size={20} color={vars.$black1} />
          </View>
        </View>
        <PostFeed />
        <View style={styles.footer}>
          <SIcon name="home" size={30} color={vars.$black1} />
          <SIcon name="search" size={30} color={vars.$black1} />
          <RIcon name="camera" size={30} color={vars.$black1} />
          <RIcon name="heart" size={30} color={vars.$black1} />
          <RIcon name="user" size={30} color={vars.$black1} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: vars.$white2,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    height: 56,
    backgroundColor: vars.$white2,
    borderBottomColor: vars.$white3,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontFamily: "billabong",
    fontSize: 40,
    color: vars.$black1,
  },
  footer: {
    height: vars.$userBarHeight,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: vars.$white3,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});


export default Picturegram;
