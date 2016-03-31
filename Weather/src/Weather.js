import React, {
  Component,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'
import api from './api'

export default class Weather extends Component {
  constructor (props) {
    super(props)
    this.coord = {
      lat: '-34.916226',
      lon: '-56.159872'
    }
    this.state = {
      latlon: '',
      city: '',
      temp: '',
      desc: '',
      msg: 'Getting weather info...',
      loading: false
    }
  }

  getWeather () {
    this.setState({loading: true})
    api.getWeather(this.coord.lat, this.coord.lon)
      .then(data => {
        this.setState({
          latlon: `(${ data.coord.lat }, ${ data.coord.lon })`,
          city: data.name,
          temp: api.kelvinToC(data.main.temp),
          desc: data.weather[0].description,
          loading: false
        })
        console.log('Weather data', data)
      })
      .catch(error => {
        this.setState({desc: 'Something went wrong :(', loading: false})
        console.log('Error during the API call', error)
      })
  }

  componentDidMount () {
    this.getWeather()
  }

  render () {
    const { latlon, city, temp, desc, msg, loading } = this.state
    return (
      <View style={ styles.wrapper }>
        <Image source={ require('./weather.png') } style={ styles.image } />
        <Text style={ styles.title }>Weather</Text>
        <View style={ styles.buttonWrapper }>
          <Button onPress={ this.getWeather.bind(this) } text='Check weather' />
        </View>
        { (loading) ? <Text style={ styles.text }>{ msg }</Text> : null }
        <Text style={ styles.city }>{ city }</Text>
        <Text style={ styles.text }>{ latlon }</Text>
        <Text style={ styles.temp }>{ temp }</Text>
        <Text style={ styles.text }>{ desc }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonWrapper: {
    margin: 25
  },
  image: {
    height: 128,
    width: 128,
    resizeMode: 'contain',
    marginBottom: 15,
    marginTop: 100
  },
  title: {
    fontSize: 40
  },
  text: {
    fontSize: 15,
    marginVertical: 10
  },
  city: {
    fontSize: 20,
    marginTop: 10
  },
  temp: {
    fontSize: 60,
    marginVertical: 10
  }
})
