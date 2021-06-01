import React from 'react';
import { StyleSheet, TextInput , View } from 'react-native';
export default class ComponentTextInputNom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom:""
    };
  }
  render() {
    return (
      <View>
        <TextInput
        label ="Nom"
        style={styles.input}
        onChangeText={text => this.setState({nom: text})}
        value={this.props.email}
        autoCapitalize="none"
        placeholder="Nom"
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
