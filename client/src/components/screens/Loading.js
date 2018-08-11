import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';


import firebase from 'firebase';
import { firebaseConfig } from '../../../config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'main' : 'login')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})