import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class ComponentConnexion extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    const { title } = this.props;
    return (
      <View>
        <Text
         style={style.header}>{title}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({

    header:{

        fontSize : 26,
        color: '#337899',
        fontWeight: 'bold',
        paddingVertical: 14,
    },

});
