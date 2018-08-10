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

import vars from '../../styles/vars';

const URI = "https://lh3.googleusercontent.com/Uvt8h7pXuPY2cO20ZmgpLxstrzLx43CwbO7xzOZnb34ed7cwshW7Y9af9mhqXeJ-Al4BwpHbEnIrxxbRqUGNmSAqsiA";

const AVATAR = 'https://media.licdn.com/dms/image/C5103AQFoh_O1MIkeXw/profile-displayphoto-shrink_100_100/0?e=1539216000&v=beta&t=CS8LX5HC9uD9drr3DX0Qq4TIsBgvYHy5ls2oQcKzmrQ';

export default class Post extends Component {
  state = {
    screenWidth: Dimensions.get('window').width,
    like: false,
    likesCount: 128,
  }

  DOUBLE_PRESS_DELAY = 300
  imageHeight = Math.floor(this.state.screenWidth * 1.1)
  imageUri = `${URI}=s${this.imageHeight}-c`

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
    this.setState(prev => ({ like: !prev.like, likesCount: prev.like ? prev.likesCount - 1 : prev.likesCount + 1 }))
  }

  render() {
    const {
      avatar,
      srcSet,
      handle
    } = this.props;

    return (
      <View>
        <View style={styles.userBar}>
          <View style={styles.imageContainer}>
            <View style={styles.avatar}>
              <Avatar
                small
                rounded
                source={{ uri: avatar || AVATAR}}
                onPress={this.foo}
                activeOpacity={0.7}
              />
            </View>

            <Text style={styles.userBarName}>{ handle || "David Kang" }</Text>
          </View>
          <View style={styles.userBarSettingsView}>
            <Text style={styles.userBarSettingsText}>...</Text>
          </View>
        </View>

        <TouchableOpacity onPress={this.handleImagePress} activeOpacity={.7}>
          <Image
            source={{uri: srcSet}}
            style={{
              width: this.state.screenWidth,
              height: this.imageHeight,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: vars.$white1,
            height: vars.$userBarHeight * 2 - 14,
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
                  : <RIcon style={{ paddingTop: 10, paddingRight: 10 }} name="heart" size={30} color={vars.$black1} onPress={this.toggleLike} />
              }

              <RIcon style={{ padding: 10 }} name="comment" size={30} color={vars.$black1} />
              <RIcon style={{ padding: 10 }} name="paper-plane" size={30} color={vars.$black1} />
            </View>

            <View
              style={{
                borderBottomColor: vars.$white3,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />

            <View style={styles.likeCount}>
              <SIcon style={{ paddingRight: 10 }} name="heart" size={15} color={vars.$black1} />
              <Text>{this.state.likesCount} {this.state.likesCount > 1 ? 'Likes' : 'Like'}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  avatar: {
    margin: vars.$margin,
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

  lineStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: vars.$black1,

  },
  userBar: {
    flexDirection: 'row',
    backgroundColor: vars.$white1,
    width: '100%',
    height: vars.$userBarHeight,
    justifyContent: 'space-between',
  },
  userBarName: {
    color: vars.$black2,
  },
  userBarSettingsView: {
    color: vars.$black3,
    width: 40,
  },
  userBarSettingsText: {
    fontSize: 30,
    position: 'absolute',
    top: -3,
  },
});
