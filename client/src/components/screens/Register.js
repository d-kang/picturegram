import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import { debug } from '../../styles/vars';

export default class Register extends PureComponent {
  state = {
    input: '',
  }
  login = () => {
    this.props.navigation.navigate('login');
  }
  handleInput = (value) => {
    this.setState(prev => ({ input: value }));
  }



  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.formContainer}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={this.handleInput} />
          <FormLabel>Username</FormLabel>
          <FormInput onChangeText={this.handleInput} />
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={this.handleInput} />
        </View>
        <Button
          onPress={this.login}
          title="Register"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.login}
          title="Already a member? Login"
          color="#841584"
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