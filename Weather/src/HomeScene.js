import React, {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Details from './Details'
import Button from './Button'

export default (props) => (
  <View style={ styles.wrapper }>
    <Image source={ require('./weather.png') } style={ styles.image } />
    <Text style={ styles.title }>Weather</Text>
    <View style={ styles.buttonWrapper }>
      <Button
        onPress={ () => props.onGetWeather(props.lat, props.lon) }
        text='Check weather' />
    </View>
    <Details {...props} />
  </View>
)

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
  }
})
