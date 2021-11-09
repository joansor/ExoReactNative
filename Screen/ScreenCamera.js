import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { Camera } from 'expo-camera';

export default class ScreenCamera extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasPermission : null,
            type : Camera.Constants.Type.back,
            url:null
        };
      }

  async useEffect(){
      const { status } = await Camera.requestPermissionsAsync();
      this.setState({hasPermission :status === 'granted'});
    }

  async snap() {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({uri:photo.uri})
    }
  };
  render(){
  if (this.setState.hasPermission === null) {
    return <View />;
  }
  if (this.setState.hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={this.state.type} ref={ref => {this.camera = ref}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setState({type:
                this.setState.type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              }); 
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.button}
           onPress={()=>{this.snap()}}
           ><Text style={styles.text}> Picture </Text></TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.buttonContainer}>
          <Image style={{flex: 1}} source={{uri: this.state.uri ? this.state.uri : 'https://reactnative.dev/img/tiny_logo.png'}}></Image>
      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection : 'column'
  },
    camera: {
    flex:1
    },
    buttonContainer:{
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    }

});

