import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import RIcon from 'react-native-vector-icons/FontAwesome5';
import vars, {debug} from '../../styles/vars'

const $iconSize = 20;
const $headerPadding = 20;

export default class Header extends Component {

  render() {
    return (
      <SafeAreaView style={styles.navBar}>
        <View style={styles.dummyDiv} />
        <Text style={styles.text}>Picturegram</Text>

        <View style={styles.paperIcon}>
          <RIcon name="paper-plane" size={$iconSize} color={vars.$black1} />
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: vars.$white2,
    borderBottomColor: vars.$white3,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dummyDiv: {
    flex: 1,
    paddingLeft: $headerPadding,
  },
  text: {
    fontFamily: "billabong",
    fontSize: 40,
    textAlign: 'center',
    color: vars.$black1,
    flex: 2,
  },
  paperIcon: {
    alignItems: 'flex-end',
    paddingRight: $headerPadding,
    flex: 1,
  },
});