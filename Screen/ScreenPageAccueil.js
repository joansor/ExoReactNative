import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import  ComponentTitle  from "../Components/ComponentTitle";
import  ComponentButton  from "../Components/ComponentButton";


export default class ScreenPageAccueil extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ComponentTitle title="Connexion/Inscription"/>
        <ComponentButton title="Connexion" changePage={()=> navigate('ConnexionScreen')}/>
        <ComponentButton title="Inscription" changePage={()=> navigate('InscriptionScreen')}/>
        <StatusBar style="auto"/>
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