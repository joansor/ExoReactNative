import React from "react";
import { StyleSheet, View, TouchableOpacity,Alert,Text } from "react-native";
import ComponentTitle from "../Components/ComponentTitle";
import ComponentButton from "../Components/ComponentButton";
import ComponentTextInputConnexion from "../Components/ComponentTextInputConnexion";
import { connect } from "react-redux";
import { emailValid, passwordValid } from "../Tools/fonctions";

class ScreenPageConnexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.fonctionInput = this.fonctionInput.bind(this)
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

    if (emailError || passError) {
      alert();
      return;
    }
    const { users } = this.props;
    let userConnect = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === this.state.email && users[i].password === this.state.password) {
        console.log('je suis dans le if')
        userConnect = true;
        this.props.navigation.navigate("Dashboard", {
          username: users[i].name,
        });
      }
    }
    if (userConnect === false) {
      Alert.alert("Erreur", "L' email ou mot de passe incorrect", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }
  render() {
    const { navigate } = this.props.navigation;
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
