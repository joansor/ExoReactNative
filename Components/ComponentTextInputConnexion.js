import React from 'react';
import { StyleSheet, TextInput , View } from 'react-native';
export default class ComponentTextInputConnexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password:""
    };
  }
  render() {
    return (
      <View>
        <TextInput
        label ="Email"
        style={styles.input}
        onChangeText={text => this.setState({email: text})}
        value={this.props.email}
        autoCapitalize="none"
        autoCompleteType="email"
        placeholder="Email"
       // returnKeyType="next"
        keyboardType="email-address"
      />
       <TextInput
       label ="Password"
       style={styles.input}
       onChangeText={text => this.setState({password: text})}
       value={this.state.password}
       autoCapitalize="none"
       autoCompleteType="password"
       placeholder="Password"
       textContentType="password"
       secureTextEntry
     />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      width:120,
      margin: 12,
      borderWidth: 1,
    },
  });
