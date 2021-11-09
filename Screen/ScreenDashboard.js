import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ComponentTitle from "../Components/ComponentTitle";
import ComponentButton from "../Components/ComponentButton";
import ComponentTextInputConnexion from "../Components/ComponentTextInputConnexion";
import ComponentTextInputNom from "../Components/ComponentTextInputNom";
import { emailValid, passwordValid, nameValid } from "../Tools/fonctions";
export default class ScreenDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: this.props.route.params.username,
      email: this.props.route.params.usermail,
      password: this.props.route.params.userpassword,
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
  updateUser() {
    console.log(this.props);
   let userid = this.props.route.params.userid;
    console.log(userid);
    const emailError = emailValid(this.state.email);
  //  const passError = passwordValid(this.state.password);
    const nameError = nameValid(this.state.nom);
    const formData = new FormData();
    formData.append("name", this.state.nom);
    formData.append("mail", this.state.email);
    formData.append("id",userid);
   // formData.append("password", this.state.password);

    if (emailError || nameError) {
      alert();
      return;
    } else {

      fetch("http://jdevalik.fr/api/userinfo.php", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json == false) {
            Alert.alertEmail(
              "Erreur",
              "L'e-mail saisi existe déjà.Veuillez saisir une autre adresse mail!",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
          }
        });
        this.props.navigation.navigate("Dashboard");
      }
  }
  deleteUser() {

    const formDataDelete = new FormData();
    let userid = this.props.route.params.userid;
    formDataDelete.append("id",userid);

    fetch("http://jdevalik.fr/api/deleteuser.php", {
      method: "POST",
      body: formDataDelete,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json == false) {
          Alert.alertEmail(
            "Erreur",
            "L'e-mail saisi existe déjà.Veuillez saisir une autre adresse mail!",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
          );
        }else{

          this.props.navigation.navigate("Accueil");
        }
      });
    }
  render() {
    const { navigate } = this.props.navigation;
    // const typePassword = true;

    return (
      <View style={styles.container}>
        <ComponentTitle title="Vous êtes connecté" />
        <Text>
          Bienvenu {this.props.route.params.username} sur notre application
          d'inscription/connexion
        </Text>

        <ComponentButton
          title="Déconnexion"
          eventBtn={() => navigate("Accueil")}
        />
        <ComponentTextInputNom
          nom={this.state.nom}
          fonctionInput={this.fonctionInput}
        />
        <ComponentTextInputConnexion
          email={this.state.email}
          password={this.state.password}
          fonctionInput={this.fonctionInput}
        />
         <ComponentButton title="Capturer Photo" eventBtn={()=> navigate('Picture')} />
        <ComponentButton title="Modifier" eventBtn={() => this.updateUser()} />
        <ComponentButton style={styles.button} title="Delete" eventBtn={() => this.deleteUser()} />
        <StatusBar style="auto" />
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
  button: {
    marginTop:5,
    backgroundColor: "#dc143c",
    
  },
});
