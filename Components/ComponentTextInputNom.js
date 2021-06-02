import React from 'react';
import { StyleSheet, TextInput , View } from 'react-native';
export default class ComponentTextInputNom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {nom} = this.props;
    return (
      <View>
        <TextInput
        label ="Nom"
        style={styles.input}
        onChangeText={text => this.props.fonctionInput(text,'nom')}
        value={nom}
        autoCapitalize="none"
        placeholder="Nom"
        returnKeyType="next"
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
