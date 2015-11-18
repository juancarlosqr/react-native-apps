'use strict';

// var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = React;

var AwesomeStopwatch = React.createClass({
// var SampleApp = React.createClass({
  startStopButton: function () {
    return (
    <TouchableHighlight style={[styles.button, this.border('#00cc00')]} underlayColor="gray">
      <Text onPress={this.handleStartPress}>
        Start
      </Text>
    </TouchableHighlight>
    );
  },
  lapButton: function () {
    return (
    <TouchableHighlight style={[styles.button, this.border('black')]}>
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
    );
  },
  border: function (color) {
    return {
      borderColor: color,
      borderWidth: 3
    };
  },
  handleStartPress: function () {
    var startTime = new Date();

    setInterval(() => {
      this.setState({
        timer: new Date() - startTime
      });
    }, 30);
  },
  getInitialState: function () {
    return {
      timer: '00:00:00'
    };
    // {this.state.timer}
    // {formatTime(this.state.timer)}
  },
  render: function() {
    return (
      <View style={styles.wrapper}>
        
        <View style={[styles.header, this.border('#f1c40f')]}>

          <View style={[styles.timerWrapper, this.border('#e74c3c')]}>
            <Text style={styles.timer}>
              {this.state.timer}
            </Text>
          </View>

          <View style={[styles.buttonsWrapper, this.border('#16a085')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>

        </View>

        <View style={[styles.footer, this.border('#2980b9')]}> 

          <Text style={this.border('black')}>
            Lap 1 - 00:00:01
          </Text>
          <Text style={this.border('black')}>
            Lap 2 - 00:00:02
          </Text>
          <Text style={this.border('black')}>
            Lap 3 - 00:00:03
          </Text>

        </View>
    </View>
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  buttonsWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70
  },
  buttonStart: {
    borderColor: '#00cc00'
  },
  footer: {
    flex: 1
  }
});

AppRegistry.registerComponent('AwesomeStopwatch', () => AwesomeStopwatch);
// AppRegistry.registerComponent('SampleApp', () => SampleApp);
