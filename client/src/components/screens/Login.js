import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default class Login extends PureComponent {

  login = () => {
    this.props.navigation.navigate('main');
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TouchableOpacity
          onPress={this.login}
        >
          <Text>LOGIN PAGE</Text>
        </TouchableOpacity>
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