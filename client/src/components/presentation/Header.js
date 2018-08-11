import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RIcon from 'react-native-vector-icons/FontAwesome5';
import vars from '../../styles/vars'

export default class Header extends Component {

  render() {
    return (
      <View style={styles.navBar}>
        <Text style={styles.header}>Picturegram</Text>

        <View style={{ position: 'absolute', right: 20, }}>
          <RIcon name="paper-plane" size={20} color={vars.$black1} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

});