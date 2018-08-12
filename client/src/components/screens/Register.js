import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import firebase from 'firebase';


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

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate('main')
          this.addUsername(username);
        })
        .catch(err => alert(`${err.message}`));




    } else {
      this.setState(prev => ({ error: true }))
    }
  }

  addUsername = (username) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updateProfile({
          displayName: username,
          photoURL: "https://scontent-lax3-1.cdninstagram.com/vp/94d0372150330fb029143952f5959197/5BEF7543/t51.2885-19/s150x150/12394115_155430204823466_807206427_a.jpg"

        })
          .then(() => {
            var displayName = user.displayName;
            var photoURL = user.photoURL;
          }, error => {
            alert(error.message);
          });
      }
    });
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
          title="Sign Up"
          accessibilityLabel="Register"
        />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('login')}
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