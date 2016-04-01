import React, {
  Component,
  MapView,
  PropTypes,
  View,
  StyleSheet
} from 'react-native'
import Details from './Details'

export default class MapScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  _onRegionChangeComplete (region) {
    const { latitude, longitude } = region
    this.setState({ pin: { latitude, longitude } })
    this.props.onGetWeather(latitude, longitude)
  }

  render () {
    return (
      <View style={ styles.wrapper }>
        <View style={ styles.wrapperMap }>
          <MapView
            annotations={ [this.state.pin] }
            onRegionChangeComplete={ this._onRegionChangeComplete.bind(this) }
            style={ styles.map } />
        </View>
        <View style={ styles.wrapperMapDetails }>
          <Details {...this.props} />
        </View>
      </View>
    )
  }
}

MapScene.propTypes = {
  onGetWeather: PropTypes.func
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  wrapperMap: {
    flex: 3,
    marginTop: 65
  },
  map: {
    flex: 1
  },
  wrapperMapDetails: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
