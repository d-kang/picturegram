import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class Register extends PureComponent {
  state = {
    email: '',
    username: '',
    password: '',
    error: false,
  }
  register = () => {
    const { email, username, password } = this.state;
    if (email && username && password) {
      alert(JSON.stringify({email, username, password}))

    } else {
      this.setState(prev => ({ error: true }))
    }
  }
  handleEmail = (value) => {
    this.setState(prev => ({ email: value }));
  }
  handleUsername = (value) => {
    this.setState(prev => ({ username: value }));
  }
  handlePassword = (value) => {
    this.setState(prev => ({ password: value }));
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.formContainer}>
          <FormLabel>Email</FormLabel>
          <FormInput
            onChangeText={this.handleEmail}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormLabel>Username</FormLabel>
          <FormInput
            onChangeText={this.handleUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={this.handlePassword}
            secureTextEntry
          />

        </View>

        {
          this.state.error && <FormValidationMessage>{'Missing Field'}</FormValidationMessage>
        }
        <Button
          onPress={this.register}
          title="Register"
          color="#841584"
          accessibilityLabel="Register"
        />
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