import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import SIcon from 'react-native-vector-icons/FontAwesome';
import RIcon from 'react-native-vector-icons/FontAwesome5';
import vars from '../../styles/vars'

class Footer extends Component {

  render() {
    return (

      <View style={styles.footer}>
        <SIcon name="home" size={30} color={vars.$black1} />
        <SIcon name="search" size={30} color={vars.$black1} />
        <RIcon name="camera" size={30} color={vars.$black1} />
        <RIcon name="heart" size={30} color={vars.$black1} />
        <RIcon name="user" size={30} color={vars.$black1} />
      </View>

    )
  }
}

const styles = StyleSheet.create({
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


export default Footer;
