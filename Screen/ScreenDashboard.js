import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import  ComponentTitle  from "../Components/ComponentTitle";
import  ComponentButton  from "../Components/ComponentButton";
//import ComponentText from "../Components/ComponentText";


export default class ScreenDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ComponentTitle title="Vous êtes connecté"/>
        <Text>Bienvenu {this.props.route.params.username} sur notre application d'inscription/connexion</Text>
        {/* <ComponentText nomUser ={this.props.route.params.username}/> */}
        <ComponentButton title="Déconnexion" eventBtn={()=> navigate('Accueil')}/>
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