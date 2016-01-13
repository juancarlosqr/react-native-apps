'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  font: {
    color: '#fff'
  },
  appName: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  }
})

export default class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {msg: 'No message'}
  }

  handleGreetPress () {
    this.setState({msg: 'Hi there!'})
  }

  handleAboutPress () {
    this.props.navigator.push({name: 'about'})
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={[styles.font, styles.appName]}>
          React Native Explorer
        </Text>
        <Text style={[styles.font, styles.content]}>
          Using the Navigator component
        </Text>
        <Text style={[styles.font, styles.content]}>
          To Start, tap on About button
        </Text>
        <Text style={[styles.font, styles.content]}>
          {this.state.msg}
        </Text>
        <Button text="About" onPress={this.handleAboutPress.bind(this)} />
        <Button text="Greet" onPress={this.handleGreetPress.bind(this)} />
      </View>
    )
  }
}
