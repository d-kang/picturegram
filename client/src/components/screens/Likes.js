import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Likes extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Likes Page</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
