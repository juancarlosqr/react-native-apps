'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#27ae60',
    borderColor: '#2C8451',
    borderRadius: 5,
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
    width: 110
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff'
  }
})

export default class Button extends Component {
  render () {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}
        underlayColor="#2C8451">
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    )
  }
}
