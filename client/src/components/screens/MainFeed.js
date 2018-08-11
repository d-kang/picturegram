import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { Header } from '../presentation';
import { PostFeed } from '../container';
import vars from '../../styles/vars'

export default class MainFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <PostFeed />
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
});



