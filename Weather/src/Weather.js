import React, {
  Component,
  Navigator,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import HomeScene from './HomeScene'
import MapScene from './MapScene'
import api from './api'

export default class Weather extends Component {
  constructor (props) {
    super(props)
    // default coordinates (Punta Carretas, Montevideo, Uy)
    this.coord = {
      lat: '-34.916226',
      lon: '-56.159872'
    }
    this.state = {
      latlon: '',
      city: '',
      temp: '',
      humidity: '',
      tempType: '',
      desc: '',
      msg: 'Getting weather info...',
      loading: false
    }
  }

  getWeather (lat, lon) {
    this.setState({loading: true})
    api.getWeather(lat, lon)
      .then(data => {
        const temp = api.kelvinToC(data.main.temp, false)
        this.setState({
          latlon: `(${ data.coord.lat }, ${ data.coord.lon })`,
          city: data.name,
          temp: api.kelvinToC(data.main.temp),
          humidity: `Humidity: ${ data.main.humidity } %`,
          tempType: (temp >= 30) ? 'hot' : ((temp >= 15) ? 'normal' : 'cold'),
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
    this.getWeather(this.coord.lat, this.coord.lon)
  }

  renderScene (route, navigator) {
    const Component = ROUTES[route.name]
    return <Component
      { ...this.state }
      { ...this.coord }
      onGetWeather={ this.getWeather.bind(this) } />
  }

  render () {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ {name: 'HomeScene'} }
        configureScene={ (route) => Navigator.SceneConfigs.FloatFromRight }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={ NavigationBarRouteMapper } />
          }
        renderScene={ this.renderScene.bind(this) } />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    fontSize: 20,
    padding: 10
  }
})

const ROUTES = {
  HomeScene,
  MapScene
}

const NavigationBarRouteMapper = {
  LeftButton: function (route, navigator, index, navState) {
    switch (route.name) {
      case 'MapScene':
        return (
          <TouchableOpacity onPress={() => navigator.pop() }>
            <Text style={ styles.menu }>Home</Text>
          </TouchableOpacity>
        )
      default:
        return null
    }
  },
  RightButton: function (route, navigator, index, navState) {
    switch (route.name) {
      case 'HomeScene':
        return (
          <TouchableOpacity onPress={() => navigator.push({name: 'MapScene'}) }>
            <Text style={ styles.menu }>Map</Text>
          </TouchableOpacity>
        )
      case 'MapScene':
        // TODO: fix this workaround
        return (
          <TouchableOpacity onPress={() => Function.prototype }>
            <Text style={ styles.menu }>{'           '}</Text>
          </TouchableOpacity>
        )
      default:
        return null
    }
  },
  Title: function (route, navigator, index, navState) {
    switch (route.name) {
      case 'HomeScene':
        return <Text style={ styles.menu }>Home</Text>
      case 'MapScene':
        return <Text style={ styles.menu }>Map</Text>
      default:
        return null
    }
  }
}
