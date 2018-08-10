import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { Icon, Avatar } from 'react-native-elements'
import FAIcon from 'react-native-vector-icons/FontAwesome';
console.log('===================================')
console.log(`%c ${new Date().toLocaleTimeString()}`, 'color: green; font-size:15px;')


const uri = "https://lh3.googleusercontent.com/Uvt8h7pXuPY2cO20ZmgpLxstrzLx43CwbO7xzOZnb34ed7cwshW7Y9af9mhqXeJ-Al4BwpHbEnIrxxbRqUGNmSAqsiA";



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const debug = () => ({
  borderRadius: 4,
  borderWidth: 2,
  borderColor: getRandomColor(),
});



const $white1 = 'rgb(255, 255, 255)';
const $white2 = 'rgb(249, 249, 249)';
const $white3 = 'rgb(233,233,233)';
const $profileImage = 40;

const $black1 = 'rgb(22,22,22)';
const $black2 = 'rgb(30,30,30)';
const $black3 = 'rgb(5,5,5)';

const $userBarHeight = 50;
const $margin = 10;



class Picturegram extends Component {
  state = {
    uri: {},
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  }

  foo = () => {
    alert('hello world!!!')
  }


  imageHeight = Math.floor(this.state.screenWidth * 1.1)
  imageUri = `${uri}=s${this.imageHeight}-c`
  render() {
    alert(JSON.stringify({ screenWidth: this.state.screenWidth, imageHeight: this.imageHeight, screenHeight: this.state.screenHeight, imageUri: this.imageUri}))
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text
            style={styles.header}
            onPress={this.foo}
          >
            Picturegram
          </Text>

          <View
            style={{
              position: 'absolute',
              right: 20,
            }}
          >
            <Icon
              type="font-awesome"
              name='upload'
              color={$black1}
            />
          </View>
        </View>
        <View style={styles.userBar}>
          <View style={styles.imageContainer}>
            <View style={styles.avatar}>
              <Avatar
                small
                rounded
                source={{ uri: 'https://media.licdn.com/dms/image/C5103AQFoh_O1MIkeXw/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=CS8LX5HC9uD9drr3DX0Qq4TIsBgvYHy5ls2oQcKzmrQ' }}
                onPress={() => alert("Works!")}
                activeOpacity={0.7}
              />
            </View>

            <Text style={styles.userBarName}>David Kang</Text>
          </View>
          <View style={styles.userBarSettingsView}>
            <Text style={styles.userBarSettingsText}>...</Text>
          </View>
        </View>

        <Image source={{ uri: this.imageUri}} style={{
          width: this.state.screenWidth,
          height: this.imageHeight,
        }}/>

        <View
          style={{
            backgroundColor: $white1,
          }}
        >
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}
          >
            <View style={styles.bottom1}>
              <Icon
                color="red"
                reverseColor="blue"
                type="font-awesome"
                name="heart"

              />
            </View>

            <View
              style={{
                borderBottomColor: 'rgba(233,233,233,.3)',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />

            <View style={styles.bottom1}></View>
          </View>
        </View>


        <View style={styles.footer}></View>

      </View>
    )
  }
}







const styles = StyleSheet.create({
  bottom1: {
    // ...debug(),
    height: ($userBarHeight / 2) + 10,
  },
  footer: {
    // ...debug(),
    height: $userBarHeight,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
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
    // alignSelf: 'center',
  },
  // mainImage: {
  //   height: 425,

  //   // width: '100%',
  // },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    height: 56,
    backgroundColor: $white2,
    borderBottomColor: $white3,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: $black1,

  },
  avatar: {
    // width: $profileImage,
    // height: $profileImage,
    // borderRadius: $profileImage / 2,
    margin: $margin,
  },
  userBar: {
    flexDirection: 'row',
    backgroundColor: $white1,
    width: '100%',
    height: $userBarHeight,
    justifyContent: 'space-between',
  },
  userBarName: {
    color: $black2,
  },
  userBarSettingsView: {
    color: $black3,
    width: 40,
  },
  userBarSettingsText: {
    fontSize: 30,
    position: 'absolute',
    top: -3,
  },
});



export default Picturegram;