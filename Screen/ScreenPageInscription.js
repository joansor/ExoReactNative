import React from "react";
import ComponentTextInputConnexion from "../Components/ComponentTextInputConnexion";
import ComponentTextInputNom from "../Components/ComponentTextInputNom";
import ComponentTitle from "../Components/ComponentTitle";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ComponentButton from "../Components/ComponentButton";


export default class ScreenPageInscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     text:""
    };
    this.fonctionInput = this.fonctionInput.bind(this);
  }
  fonctionInput(textInput) {
    this.setState({ email: textInput });
    this.setState({ password: textInput });
    this.setState({ nom: textInput });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ComponentTitle title="Inscription"/>
        <ComponentTextInputNom text={this.state.text}/>
        <ComponentTextInputConnexion text={this.state.text}/>
        <ComponentButton title="Inscription" />
        <Text>Déja inscrit ? <TouchableOpacity onPress={()=> navigate('ConnexionScreen')}><Text>Connectez-vous</Text></TouchableOpacity></Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
