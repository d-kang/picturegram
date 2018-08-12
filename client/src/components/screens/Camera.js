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
  AppRegistry,
  TouchableOpacity,
} from 'react-native'

import RNFetchBlob from 'rn-fetch-blob';

import { RNCamera } from 'react-native-camera';
import { debug } from '../../styles/vars';

import firebase from 'firebase';

const { width } = Dimensions.get('window')

export default class Camera extends React.Component {
  static navigationOptions = {
    title: 'Camera Roll App'
  }

  state = {
    modalVisible: false,
    modalVisible2: false,
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
  toggleModal2 = () => {
    this.setState({ modalVisible2: !this.state.modalVisible2 });
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      this.share(null, data.uri);
    }
  };

  share = (_, image) => {
    image = image || this.state.photos[this.state.index].node.image.uri;
    console.log('image: ', image);
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    let uploadBlob = null;
    const imageRef = firebase.storage().ref('posts').child("test.jpg");
    // ** change test.jpg. maybe use time, user info.
    // ** image: assets-library://asset/asset.JPG?id=99D53A1F-FEEF-40E1-8BB3-7DD55A43C8B7&ext=JPG
    // ** look up best practice
    let mime = 'image/jpg';

    fs.readFile(image, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob;
        console.log('uploadBlob: ', uploadBlob);
        return imageRef.put(blob, { contentType: mime }) // saving to firebase
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        // URL of the image uploaded on Firebase storage
        console.log('CAMERA SUCCESS:::', { url });
      })
      .catch((error) => {
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


        <Button
          title='Open Camera'
          onPress={() => { this.toggleModal2();}}
        />
        <Modal
          visible={this.state.modalVisible2}
        >
          <View style={styles.container2}>
            <RNCamera
              ref={ref => { this.camera = ref }}
              style={styles.preview}
              type={RNCamera.Constants.Type.front}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={this.takePicture}
                style={styles.capture}
              >
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button
            title='Close'
            onPress={this.toggleModal2}
          />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  },

  container2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  }
})

