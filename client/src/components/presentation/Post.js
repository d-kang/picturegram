import React, { Component,PureComponent } from 'react';
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



const Post = (props) => {
  const {
    id,
    avatar,
    srcSet,
    userHandle,
    handleImagePress,
    SCREEN_WIDTH,
    IMAGE_HEIGHT,
    liked,
    likes,
    toggleLike,
  } = props;
  return (
    <View>
      <View style={styles.userBar}>
        <View style={styles.imageContainer}>
          <View style={styles.avatar}>
            <Avatar
              small
              rounded
              source={{ uri: avatar || AVATAR }}
              activeOpacity={0.7}
            />
          </View>

          <Text style={styles.userBarName}>{userHandle || "David Kang"}</Text>
        </View>
        <View style={styles.userBarSettingsView}>
          <Text style={styles.userBarSettingsText}>...</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => handleImagePress(id)}activeOpacity={.7}>
        <Image
          source={{ uri: srcSet }}
          style={{
            width: SCREEN_WIDTH,
            height: IMAGE_HEIGHT,
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
              liked
                ? <SIcon style={{ paddingTop: 10, paddingRight: 10 }} name="heart" size={30} color="rgb(246,68,93)" onPress={() => toggleLike(id)} />
                : <RIcon style={{ paddingTop: 10, paddingRight: 10 }} name="heart" size={30} color={vars.$black1} onPress={() => toggleLike(id)} />
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
            <Text>{likes} {likes > 1 ? 'Likes' : 'Like'}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Post;

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
