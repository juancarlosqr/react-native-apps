import React, { StyleSheet, Text, TouchableHighlight } from 'react-native'

export default ({ onPress, text }) => (
  <TouchableHighlight
    onPress={ onPress }
    style={ styles.button }
    underlayColor='#34495E'>
    <Text style={ styles.buttonText }>{ text }</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2980B9',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF'
  }
})
