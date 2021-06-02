import React from "react";
import ComponentTextInputConnexion from "../Components/ComponentTextInputConnexion";
import ComponentTextInputNom from "../Components/ComponentTextInputNom";
import ComponentTitle from "../Components/ComponentTitle";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import ComponentButton from "../Components/ComponentButton";
import { emailValid, passwordValid, nameValid } from "../Tools/fonctions";
import { connect } from "react-redux";

class ScreenPageInscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      email: "",
      password: "",
    };
    this.fonctionInput = this.fonctionInput.bind(this);
  }
  fonctionInput(textInput, type) {
    switch (type) {
      case "nom":
        this.setState({ nom: textInput });
        break;
      case "email":
        this.setState({ email: textInput });
        break;
      case "password":
        this.setState({ password: textInput });
        break;
      default:
        console.log("Tous les champs ne sont pas rempli");
    }
  }
  AddUser() {
    console.log("click inscription");
    const emailError = emailValid(this.state.email);
    const passError = passwordValid(this.state.password);
    const nameError = nameValid(this.state.nom);
    let user = [];
    if (emailError || passError || nameError) {
      alert();
      return;
    } else {
      const action = {
        type: "ADD_USER",
        value: {
          name: this.state.nom,
          email: this.state.email,
          password: this.state.password,
        },
      };
      this.props.dispatch(action);
      this.props.navigation.navigate("ConnexionScreen");
    }
  }
  alert(){
    Alert.alert("Erreur", "Les champs sont incorrect", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ComponentTitle title="Inscription" />
        <ComponentTextInputNom
          nom={this.state.nom}
          fonctionInput={this.fonctionInput}
        />
        <ComponentTextInputConnexion
          email={this.state.email}
          password={this.state.password}
          fonctionInput={this.fonctionInput}
        />
        <ComponentButton title="Inscription" eventBtn={() => this.AddUser()} />
        <Text>
          Déja inscrit ?{" "}
          <TouchableOpacity onPress={() => navigate("ConnexionScreen")}>
            <Text>Connectez-vous</Text>
          </TouchableOpacity>
        </Text>
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
export default connect(mapStateToProps)(ScreenPageInscription);