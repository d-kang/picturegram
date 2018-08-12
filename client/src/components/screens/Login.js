import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import { debug } from '../../styles/vars';

export default class Login extends PureComponent {
  state = {
    input: '',
  }
  login = () => {
    this.props.navigation.navigate('main');
  }
  handleInput = (value) => {
    this.setState(prev => ({ input: value }));
  }
  register =() => {
    this.props.navigation.navigate('register');
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.formContainer}>
          <FormLabel>Username</FormLabel>
          <FormInput onChangeText={this.handleInput} />
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={this.handleInput} />
        </View>
        <Button
          onPress={this.login}
          title="Login"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.register}
          title="Don't have an account? Sign Up"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.state.input}</Text>
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
  formContainer: {
    width: '80%',
  },

});