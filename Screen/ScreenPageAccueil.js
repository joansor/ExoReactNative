import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import  ComponentTitle  from "../Components/ComponentTitle";
import  ComponentButton  from "../Components/ComponentButton";
import * as SQLite from 'expo-sqlite';


export default class ScreenPageAccueil extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    const db = SQLite.openDatabase("user.db");
    db.transaction(tx => { tx.executeSql("create table if not exists user (id integer primary key not null, name text, mail text, mdp text);");})
   

    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ComponentTitle title="Connexion/Inscription"/>
        <ComponentButton title="Connexion" eventBtn={()=> navigate('ConnexionScreen')}/>
        <ComponentButton title="Inscription" eventBtn={()=> navigate('InscriptionScreen')}/>
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