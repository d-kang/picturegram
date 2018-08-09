import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


class Picturegram extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.header}>Picturegram</Text>
        </View>
        <View style={styles.userBar}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://media.licdn.com/dms/image/C5103AQFoh_O1MIkeXw/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=CS8LX5HC9uD9drr3DX0Qq4TIsBgvYHy5ls2oQcKzmrQ'}}
            />
            <Text style={styles.userBarName}>David Kang</Text>
          </View>
          <View style={styles.userBarSettingsView}>
            <Text style={styles.userBarSettingsText}>...</Text>
          </View>
        </View>
        <Image source={uri} style={styles.mainImage}/>
      </View>
    )
  }
}

const $white1 = 'rgb(255, 255, 255)';
const $white2 = 'rgb(249, 249, 249)';
const $white3 = 'rgb(233,233,233)';
const $profileImage = 40;

const $black1 = 'rgb(22,22,22)';
const $black2 = 'rgb(30,30,30)';
const $black3 = 'rgb(5,5,5)';

const $userBarHeight = 50;
const $margin = 10;



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const debugBorder = () => ({
  borderRadius: 4,
  borderWidth: 2,
  borderColor: getRandomColor(),
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: $white2,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    fontFamily: "billabong",
    fontSize: 40,
    color: $black1,
  },
  mainImage: {
    height: 100,
    width: '100%',
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navBar: {
    width: '100%',
    marginTop: 15,
    height: 56,
    backgroundColor: $white2,
    borderBottomColor: $white3,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: $profileImage,
    height: $profileImage,
    borderRadius: $profileImage / 2,
    margin: $margin,
  },
  userBar: {
    flexDirection: 'row',
    backgroundColor: $white1,
    width: '100%',
    height: $userBarHeight,
    alignContent: 'center',
  },
  userBarName: {
    // marginLeft: 10,
    color: $black2,
  },
  userBarSettingsView: {
    // ...debugBorder(),
    color: $black3,
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  userBarSettingsText: {
    // ...debugBorder(),
    marginBottom: $userBarHeight / 10,
    marginRight: $margin * 2,
  },
});

const uri = { uri: "https://firebasestorage.googleapis.com/v0/b/picturegram-a20ea.appspot.com/o/photo-1533764625214-b97671494f23.jpeg?alt=media&token=b5d36409-9d1d-4361-81eb-7b922bc875da" }

export default Picturegram;