'use strict';

var React = require('react-native');
var Api = require('./api');

var {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

var Weather = React.createClass({
  getInitialState: function () {
    return {
      lat: '-34.916226',
      lon: '-56.159872',
      city: '',
      temp: '',
      desc: ''
    };
  },
  getWeather: function () {
    Api(this.state.lat, this.state.lon)
      .then((data) => {
        if(data !== null) {
          this.setState(data);
        }
        else {
          this.setState({desc: 'Something went wrong :('});
        }
      });
  },
  render: function () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Weather
        </Text>
        <Text>
          {this.state.lat}
        </Text>
        <Text>
          {this.state.lon}
        </Text>
        <TouchableHighlight
          onPress={this.getWeather}
          style={styles.button}>
          <Text>
            Check weather
          </Text>
        </TouchableHighlight>
        <Text style={styles.city}>
          {this.state.city}
        </Text>
        <Text>
          {this.state.temp}
        </Text>
        <Text>
          {this.state.desc}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    flex:1,
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
});

module.exports = Weather;