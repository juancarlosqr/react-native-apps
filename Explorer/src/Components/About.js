'use strict'

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  PropTypes
} from 'react-native'
import Button from './Button'
import SwipeableView from './SwipeableView'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  content: {
    flex: 5,
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
  },
  msg: {
    color: '#27ae60'
  },
  swip: {
    flex: 5,
    borderWidth: 3,
    borderColor: '#27ae60'
  }
})

export default class About extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  handleClearPress () {
    this.setState({text: ''})
  }

  handleBackPress () {
    this.props.navigator.pop()
  }

  handleToRightSwipe () {
    this.setState({text: 'From Left to Right!'})
  }

  handleToDownSwipe () {
    this.setState({text: 'From Up to Down!'})
  }

  handleToUpSwipe () {
    this.setState({text: 'From Down to Up!'})
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.headline}>
            About
          </Text>
          <Text style={styles.text}>
            Type some text in the input
          </Text>
          <Text style={styles.text}>
            Swip in the green box (Swip from Right to Go back)
          </Text>
          <Text style={styles.msg}>
            {this.state.text}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button text='Clear' onPress={this.handleClearPress.bind(this)} />
          <Button text='Go back' onPress={this.handleBackPress.bind(this)} />
        </View>
        <View style={styles.swip}>
          <SwipeableView
            toLeftSwipe={this.handleBackPress.bind(this)}
            toRightSwipe={this.handleToRightSwipe.bind(this)}
            toDownSwipe={this.handleToDownSwipe.bind(this)}
            toUpSwipe={this.handleToUpSwipe.bind(this)} />
        </View>
      </View>
    )
  }
}

About.propTypes = {
  navigator: PropTypes.object
}
