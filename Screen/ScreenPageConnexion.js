import React from "react";
import { StyleSheet, View } from "react-native";
import ComponentTitle from "../Components/ComponentTitle";
import ComponentButton from "../Components/ComponentButton";
import ComponentBtnInscription from "../Components/ComponentBtnInscription";
import ComponentTextInputConnexion from "../Components/ComponentTextInputConnexion";
import {connect} from 'react-redux';


export default class ScreenPageConnexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password:""
    };
    //this.fonctionInput = this.fonctionInput.bind(this)
  }
  onLoggin(){

    const emailError = emailValid(this.state.email);
    const passError = passValid(this.state.password);

    if(emailError || passError){
      alert()
      return;
    }
    const {users} = this.props
    let userConnect = false
    for(let i = 0; i<users.length;i++){

      if(users[i].email === this.state.email && users[i].password === this.state.password){
        userConnect = true
        this.props.navigation.navigate('Dashboard',{username:users[i].name});
      }
    }

  }
  // fonctionInput(textInput) {
  //    this.setState({ text: textInput });
  //  //console.log(this);
  // }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ComponentTitle title="Connexion" />
        <ComponentTextInputConnexion text={this.state.text}/>
        <ComponentButton title="Connexion" />
        <ComponentBtnInscription title="S'incrire" changePage={()=> navigate('InscriptionScreen')}/>
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
const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(ScreenPageConnexion)