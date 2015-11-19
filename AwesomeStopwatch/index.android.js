'use strict';

var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');

var {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = React;

var AwesomeStopwatch = React.createClass({
// var Stopwatch = React.createClass({
// var SampleApp = React.createClass({
  startStopButton: function () {
    var styleButton = this.state.running ? styles.buttonStop : styles.buttonStart;
    return (
    <TouchableHighlight
      onPress={this.handleStartPress}
      style={[styles.button, styleButton]}
      underlayColor="gray">
      <Text style={styles.buttonText}>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
    );
  },
  lapButton: function () {
    return (
    <TouchableHighlight 
      onPress={this.handleLapPress}
      style={[styles.button, styles.buttonLap]} 
      underlayColor="gray">
      <Text style={styles.buttonText}>
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
    if(this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return;
    }

    this.setState({laps: []});
    this.startTimer();

    this.interval = setInterval(() => {
      this.setState({
        timer: new Date() - this.state.startTime,
        running: true
      });
    }, 50);
  },
  handleLapPress: function () {
    this.setState({laps: this.state.laps.concat([this.state.timer])});
    this.startTimer();
  },
  startTimer: function () {
    this.setState({startTime: new Date()});
  },
  getInitialState: function () {
    return {
      timer: null,
      startTime: null,
      running: false,
      laps: []
    };
  },
  getLaps: function () {
    return this.state.laps.map(function (lap, index) {
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(lap)}
        </Text>
      </View>
    });
  },
  render: function() {
    return (
      <View style={styles.wrapper}>
        
        <View style={styles.header}>

          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {formatTime(this.state.timer)}
            </Text>
          </View>

          <View style={styles.buttonsWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>

        </View>

        <View style={styles.footer}>
          {this.getLaps()}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60,
    color: '#000'
  },
  buttonsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    fontSize: 20,
    alignItems: 'center',
    height: 90,
    width: 90,
    color: '#000'
  },
  buttonStart: {
    backgroundColor: '#94e4b6',
    borderColor: '#27ae60'
  },
  buttonStop: {
    backgroundColor: '#eca6a0',
    borderColor: '#e74c3c'
  },
  buttonLap: {
    backgroundColor: '#A0CAE6',
    borderColor: '#3498db'
  },
  footer: {
    flex: 1
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('AwesomeStopwatch', () => AwesomeStopwatch);
// AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
// AppRegistry.registerComponent('SampleApp', () => SampleApp);
