import React, {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default ({ city, latlon, temp, tempType, humidity, desc, msg, loading }) => (
  <View style={ styles.wrapper }>
    <Text style={ styles.city }>{ city }</Text>
    <Text style={ [styles.text, styles.latlon] }>{ latlon }</Text>
    <Text style={ [styles.temp, styles[tempType]] }>{ temp }</Text>
    <Text style={ styles.text }>{ humidity }</Text>
    { (loading)
      ? <Text style={ [styles.loading, styles.text] }>{ msg }</Text>
      : <Text style={ styles.text }>{ desc }</Text>
    }
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  loading: {
    color: '#D35400',
    fontStyle: 'italic'
  },
  text: {
    fontSize: 15,
    marginVertical: 5
  },
  city: {
    fontSize: 20,
    marginTop: 10
  },
  latlon: {
    fontSize: 11
  },
  temp: {
    fontSize: 60
  },
  hot: {
    color: '#F78181'
  },
  normal: {
    color: '#31B404'
  },
  cold: {
    color: '#58D3F7'
  }
})
