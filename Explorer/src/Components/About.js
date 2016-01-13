'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    color: '#fff',
    padding: 4,
    height: 40,
    width: 210,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
    margin: 10
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  text: {
    color: '#fff',
    margin: 3
  }
})

export default class About extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  handleBackPress () {
    this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          About
        </Text>
        <Text style={styles.text}>
          Type some text in the input
        </Text>
        <Text style={styles.text}>
          {this.state.text}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button text="Go back" onPress={this.handleBackPress.bind(this)} />
      </View>
    )
  }
}
