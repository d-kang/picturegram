import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Post } from '../presentation';
import MOCKDATA from './mockFeed';

export default class PostFeed extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState(prev => ({ data: MOCKDATA }))
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Post
      id={item.id}
      srcSet={item.display_src}
      avatar={item.avatar}
      handle={item.handle}
    />
  );

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}
