import React, {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default ({ city, latlon, temp, desc, msg, loading }) => (
  <View style={ styles.wrapper }>
    { (loading)
      ? <Text style={ [styles.loading, styles.text] }>{ msg }</Text>
      : null
    }
    <Text style={ styles.city }>{ city }</Text>
    <Text style={ [styles.text, styles.latlon] }>{ latlon }</Text>
    <Text style={ styles.temp }>{ temp }</Text>
    <Text style={ styles.text }>{ desc }</Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  loading: {
    fontStyle: 'italic'
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
  },
  latlon: {
    fontSize: 11
  }
})
