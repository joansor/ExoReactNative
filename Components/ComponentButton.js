import React from "react";
import { StyleSheet,Button, Text, View, Alert } from "react-native";
export default class ComponentButton extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    const { title, eventBtn } = this.props;
   
    return (
      <View style={style.button}>
        <Button
          title={title}
          color="#fff"
          onPress={eventBtn}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({

    button: {
        marginTop:5,
        backgroundColor: "#841584",
        
      },
     
});
