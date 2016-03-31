import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import api from './api'

export default class Weather extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: '-34.916226',
      lon: '-56.159872',
      city: '',
      temp: '',
      desc: ''
    }
  }

  getWeather () {
    api.getWeather(this.state.lat, this.state.lon)
      .then((data) => {
        if (data !== null) this.setState(data)
        else this.setState({desc: 'Something went wrong :('})
      })
  }

  render () {
    return (
      <View style={ styles.wrapper }>
        <Text style={ styles.title }>
          Weather
        </Text>
        <Text>
          { this.state.lat }
        </Text>
        <Text>
          { this.state.lon }
        </Text>
        <TouchableHighlight
          onPress={ this.getWeather.bind(this) }
          style={ styles.button }>
          <Text>
            Check weather
          </Text>
        </TouchableHighlight>
        <Text style={ styles.city }>
          { this.state.city }
        </Text>
        <Text>
          { this.state.temp }
        </Text>
        <Text>
          { this.state.desc }
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  },
  title: {
    color: '#000',
    fontSize: 40
  },
  city: {
    fontSize: 20
  }
})
