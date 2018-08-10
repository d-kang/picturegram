import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements'
import SIcon from 'react-native-vector-icons/FontAwesome';
import RIcon from 'react-native-vector-icons/FontAwesome5';

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


  DOUBLE_PRESS_DELAY = 300
  imageHeight = Math.floor(this.state.screenWidth * 1.1)
  imageUri = `${uri}=s${this.imageHeight}-c`

  state = {
    uri: {},
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    like: false,
    likesCount: 128,
  }

  foo = () => {
    alert('hello world!')
  }

  handleImagePress = () => {
    const now = new Date().getTime();

    if (this.lastImagePress && (now - this.lastImagePress) < this.DOUBLE_PRESS_DELAY) {
      delete this.lastImagePress
      this.toggleLike();
    }
    else {
      this.lastImagePress = now;
    }
  }

  toggleLike = () => {
    this.setState(prev => ({ like: !prev.like, likesCount: prev.like ? prev.likesCount - 1 : prev.likesCount + 1}))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text
            style={styles.header}
            onPress={this.foo}
          >
            Picturegram
          </Text>

          <View style={{ position: 'absolute', right: 20, }}>
            <RIcon name="inbox" size={20} color={$black1} />
          </View>
        </View>
        <View style={styles.userBar}>
          <View style={styles.imageContainer}>
            <View style={styles.avatar}>
              <Avatar
                small
                rounded
                source={{ uri: 'https://media.licdn.com/dms/image/C5103AQFoh_O1MIkeXw/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=CS8LX5HC9uD9drr3DX0Qq4TIsBgvYHy5ls2oQcKzmrQ' }}
                onPress={this.foo}
                activeOpacity={0.7}
              />
            </View>

            <Text style={styles.userBarName}>David Kang</Text>
          </View>
          <View style={styles.userBarSettingsView}>
            <Text style={styles.userBarSettingsText}>...</Text>
          </View>
        </View>

        <TouchableOpacity onPress={this.handleImagePress} activeOpacity={.7}>
          <Image
            source={{ uri: this.imageUri }}
            style={{
              width: this.state.screenWidth,
              height: this.imageHeight,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: $white1,
            height: $userBarHeight * 2 - 14,
          }}
        >
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              {
                this.state.like
                  ? <SIcon style={{ paddingTop: 10, paddingRight: 10 }} name="heart" size={30} color="rgb(246,68,93)" onPress={this.toggleLike} />
                  : <RIcon style={{ paddingTop: 10, paddingRight: 10 }} name="heart" size={30} color={$black1} onPress={this.toggleLike} />
              }

              <RIcon style={{ padding: 10 }} name="comment" size={30} color={$black1} />
              <RIcon style={{ padding: 10 }} name="arrow-alt-circle-up" size={30} color={$black1} />
            </View>

            <View
              style={{
                borderBottomColor: $white3,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />

            <View style={styles.likeCount}>
              <SIcon style={{ paddingRight: 10 }} name="heart" size={15} color={$black1} />
              <Text>{this.state.likesCount} {this.state.likesCount > 1 ? 'Likes' : 'Like'}</Text>
            </View>
          </View>
        </View>


        <View style={styles.footer}>
          <SIcon name="home" size={30} color={$black1} />
          <SIcon name="search" size={30} color={$black1} />
          <RIcon name="camera" size={30} color={$black1} />
          <RIcon name="heart" size={30} color={$black1} />
          <RIcon name="user" size={30} color={$black1} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  avatar: {
    margin: $margin,
  },
  container: {
    backgroundColor: $white2,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  footer: {
    height: $userBarHeight,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: $white3,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  header: {
    fontFamily: "billabong",
    fontSize: 40,
    color: $black1,
  },
  heartIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'red',
  },
  commentIcon: {
    height: 25,
    width: 25,
  },
  dmIcon: {
    height: 25,
    width: 25,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeCount: {
    paddingTop: 10,
    flexDirection: 'row',
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
