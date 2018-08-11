import React, { Component, PureComponent } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { Post } from '../presentation';
import MOCKDATA from './mockFeed';

export default class PostFeed extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState(prev => ({ data: MOCKDATA }))
  }

  DOUBLE_PRESS_DELAY = 300;
  SCREEN_WIDTH = Dimensions.get('window').width;
  IMAGE_HEIGHT = Math.floor(this.SCREEN_WIDTH * 1.1);
  // imageUri = `${URI}=s${this.imageHeight}-c`;

  handleImagePress = (id) => {
    const now = new Date().getTime();

    if (this.lastImagePress && (now - this.lastImagePress) < this.DOUBLE_PRESS_DELAY) {
      delete this.lastImagePress
      this.toggleLike(id);
    }
    else {
      this.lastImagePress = now;
    }
  }

  toggleLike = (id) => {
    this.setState(prevState => {
      const copy = prevState.data.slice();
      const i = copy.findIndex((post) => post.id === id);
      const target = copy[i];
      target.likes = target.liked ? target.likes - 1 : target.likes + 1;
      target.liked = !target.liked;
      return {
        data: copy,
      }
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Post
      id={item.id}
      srcSet={item.display_src}
      avatar={item.avatar}
      userHandle={item.handle}
      handleImagePress={this.handleImagePress}
      toggleLike={this.toggleLike}
      likes={item.likes}
      liked={item.liked}
      SCREEN_WIDTH={this.SCREEN_WIDTH}
      IMAGE_HEIGHT={this.IMAGE_HEIGHT}
    />
  );

  render() {
    console.log('Feed render')
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}
