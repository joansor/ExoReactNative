import React from "react";
import { StyleSheet,Button, Text, View, Alert } from "react-native";
export default class ComponentBtnInscription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, changePage } = this.props;
    return (
      <View style={style.button}>
        <Button
          title={title}
          color="#841584"
          onPress={changePage}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({

    button: {
        marginTop:5,
        backgroundColor: "#fff",
        borderStyle:"solid",
        borderWidth: 1,
        borderColor: '#E0E0E0'

        
      },
     
});
