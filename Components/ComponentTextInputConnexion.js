import React from 'react';
import { StyleSheet, TextInput , View } from 'react-native';
export default class ComponentTextInputConnexion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { email,password } = this.props;
    return (
      <View>
        <TextInput
        label ="Email"
        style={styles.input}
        onChangeText={text => this.props.fonctionInput(text,'email')}
        value={email}
        autoCapitalize="none"
        autoCompleteType="email"
        placeholder="Email"
        returnKeyType="next"
        keyboardType="email-address"
      />
       <TextInput
       label ="Password"
       style={styles.input}
       onChangeText={text => this.props.fonctionInput(text,'password')}
       value={password}
       autoCapitalize="none"
       autoCompleteType="password"
       placeholder="Password"
       textContentType="password"
       returnKeyType="done"
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
