import React from "react";
import { StyleSheet, View, TouchableOpacity,Alert,Text } from "react-native";
import ComponentTitle from "../Components/ComponentTitle";
import ComponentButton from "../Components/ComponentButton";
import ComponentTextInputConnexion from "../Components/ComponentTextInputConnexion";
import { connect } from "react-redux";
import { emailValid, passwordValid } from "../Tools/fonctions";
//import * as SQLite from 'expo-sqlite';

class ScreenPageConnexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.fonctionInput = this.fonctionInput.bind(this);
   console.log("construtor : "+[this.componentDidMount]);
  }
  fonctionInput(textInput,type) {
    if(type === 'email'){
      this.setState({ email: textInput });
    }else{
      this.setState({ password: textInput });
    }
  }
  onLoggin() {
    console.log('click connexion')
    console.log(this.state.email);
    console.log(this.state.password);
    const emailError = emailValid(this.state.email);
    const passError = passwordValid(this.state.password);
   // const db = SQLite.openDatabase("user.db");
   const formData = new FormData();
    formData.append("mail",this.state.email);
    formData.append("password",this.state.password);
    if (emailError || passError) {
      Alert.alert(
        'Erreur',
        'Entrez des champs valide',
        [
            {text: 'OK', onPress:()=> console.log('OK Pressed')},

        ],
      )
      return;
    }else{
    
      fetch('http://jdevalik.fr/api/getuser.php',{
        method:'POST',
        body: formData,
        headers:{
          "Content-Type": "multipart/form-data"
        }
      })
        .then((response)=> response.json())
          .then((json)=>{
            console.log(json);
            if(json != false){
              console.log(json.name);
              this.props.navigation.navigate('Dashboard',{username:json.name,userid:json.id,usermail:json.pseudo,userpassword:json.password});

            }else{
              Alert.alert(
                'Erreur',
                [
                    {text: 'OK', onPress:()=> console.log('OK Pressed')},

                ],
              )
            }
          })
    }


      //SQLITE
      // return new Promise((resolve,reject)=>{
      //   db.transaction(tx=>{
      //     tx.executeSql('SELECT * FROM user WHERE mail = ? AND mdp = ?',[this.state.email,this.state.password],(tx,{rows})=>{
      //       console.log(rows);
      //       if(rows._array.length > 0){
      //         console.log(this.props.navigation);
      //         this.props.navigation.navigate('Dashboard',{username:rows._array[0].name});
    //         }else{
    //           this.alert();
    //         }
    //       },(tx,error)=>{
    //         console.log("erreur de traitement")
    //       })
    //     })
    //   })
    // }

    //REDUX
    // const { users } = this.props;
    // let userConnect = false;
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].email === this.state.email && users[i].password === this.state.password) {
    //     console.log('je suis dans le if')
    //     userConnect = true;
    //     this.props.navigation.navigate("Dashboard", {
    //       username: users[i].name,
    //     });
    //   }
    // }
    // if (userConnect === false) {
    //   Alert.alert("Erreur", "L' email ou mot de passe incorrect", [
    //     { text: "OK", onPress: () => console.log("OK Pressed") },
    //   ]);
    // }
  }
  alert(){

    Alert.alert("Erreur", "L' email ou mot de passe incorrect", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }
  componentDidMount(){
    console.log("function : "+'[componentDidMount]');
  }
  UNSAFE_componentWillUpdate(){
    console.log("functionWillUpdate : "+'[componenWilluptdate]');
  }
  componentDidUpdate(){
    console.log("functionDidUpdate : "+'[componentDidUpdate]');
  }
  componentWillUnmount(){
    console.log("functionWillUnmount : "+'[componentWillUnmount]');
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log("render : "+[this.componentDidMount]);
    console.log("render : "+[this.UNSAFE_componentWillUpdate]);
    console.log("render : "+[this.componentDidUpdate]);
    console.log("render : "+[this.componentWillUnmount]);

    return (
      <View style={styles.container}>
        <ComponentTitle title="Connexion" />
        <ComponentTextInputConnexion email={this.state.email} password={this.state.password} fonctionInput={this.fonctionInput}/>
          <ComponentButton title="Connexion" eventBtn={()=>this.onLoggin()}/>
          <TouchableOpacity onPress={()=> navigate('InscriptionScreen')}><Text>S'incrire</Text></TouchableOpacity>
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
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ScreenPageConnexion);
