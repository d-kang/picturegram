import React from 'react'

import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Button,
  CameraRoll,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'

import RNFetchBlob from 'rn-fetch-blob';

import firebase from 'firebase';

let styles
const { width } = Dimensions.get('window')

class App extends React.Component {
  static navigationOptions = {
    title: 'Camera Roll App'
  }

  state = {
    modalVisible: false,
    photos: [],
    index: null
  }

  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
      .then(r => this.setState({ photos: r.edges }))
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  navigate = () => {
    const { navigate } = this.props.navigation
    navigate('ImageBrowser')
  }

  share = () => {
    const image = this.state.photos[this.state.index].node.image.uri;

    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    let uploadBlob = null;
    const imageRef = firebase.storage().ref('posts').child("test.jpg");
    let mime = 'image/jpg';

    console.log(0)

    fs.readFile(image, 'base64')
      .then((data) => {
        console.log(1)
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        console.log('blob: ', blob);
        console.log(2)
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        console.log(3)
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        console.log(4)
        // URL of the image uploaded on Firebase storage
        console.log('CAMERA SUCCESS:::', { url });
      })
      .catch((error) => {
        console.log(5)
        console.log('CAMERA ERROR:::', {error});
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='View Photos'
          onPress={() => { this.toggleModal(); this.getPhotos() }}
        />
        <Button
          title='Browse Images'
          onPress={this.navigate}
        />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('closed')}
        >
          <View style={styles.modalContainer}>
            <Button
              title='Close'
              onPress={this.toggleModal}
            />
            <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{ opacity: i === this.state.index ? 0.5 : 1 }}
                      key={i}
                      underlayColor='transparent'
                      onPress={() => this.setIndex(i)}
                    >
                      <Image
                        style={{
                          width: width / 3,
                          height: width / 3
                        }}
                        source={{ uri: p.node.image.uri }}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
            {
              this.state.index !== null && (
                <View style={styles.shareButton}>
                  <Button
                    title='Share'
                    onPress={this.share}
                  />
                </View>
              )
            }
          </View>
        </Modal>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  shareButton: {
    position: 'absolute',
    width,
    padding: 10,
    bottom: 0,
    left: 0
  }
})

export default App
