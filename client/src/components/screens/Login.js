import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import firebase from 'firebase';

export default class Login extends PureComponent {
  state = {
    email: '',
    password: '',

  }

  handleEmail = (value) => {
    this.setState(prev => ({ email: value }));
  }

  handlePassword = (value) => {
    this.setState(prev => ({ password: value }));
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('main')
      })
      .catch(err => alert(`${err.message}`));
  }


  goToRegister =() => {
    this.props.navigation.navigate('register');
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
          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={this.handlePassword}
            secureTextEntry
          />
        </View>
        <Button
          onPress={this.handleLogin}
          title="Login"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.goToRegister}
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