import React, {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: null,
      startTime: null,
      running: false,
      laps: []
    }
  }

  startTimer () {
    this.setState({startTime: new Date()})
  }

  handleStartPress () {
    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({running: false})
      return
    }
    this.setState({laps: []})
    this.startTimer()
    this.interval = setInterval(() => {
      this.setState({
        timer: new Date() - this.state.startTime,
        running: true
      })
    }, 50)
  }

  handleLapPress () {
    if (this.state.running) {
      this.setState({laps: this.state.laps.concat([this.state.timer])})
      this.startTimer()
    }
  }

  startStopButton () {
    const options = (this.state.running) ? {
      style: styles.buttonStop,
      underlayColor: COLOR_STOP_BORDER,
      text: 'Stop'
    } : {
      style: styles.buttonStart,
      underlayColor: COLOR_START_BORDER,
      text: 'Start'
    }
    return (
      <TouchableHighlight
        onPress={ this.handleStartPress.bind(this) }
        style={ [styles.button, options.style] }
        underlayColor={ options.underlayColor }>
        <Text style={ styles.buttonText }>{ options.text }</Text>
      </TouchableHighlight>
    )
  }

  lapButton () {
    return (
      <TouchableHighlight
        onPress={ this.handleLapPress.bind(this) }
        style={ [styles.button, styles.buttonLap] }
        underlayColor={ COLOR_LAP_BORDER }>
        <Text style={ styles.buttonText }>Lap</Text>
      </TouchableHighlight>
    )
  }

  getLaps () {
    return this.state.laps.map((lap, i) => (
      <View style={ styles.lap } key={ i }>
        <Text style={ styles.lapText }>
          Lap #{ i + 1 }
        </Text>
        <Text style={ styles.lapText }>
          { formatTime(lap) }
        </Text>
      </View>
    ))
  }

  render () {
    return (
      <View style={ styles.wrapper }>
        <View style={ styles.header }>
          <View style={ styles.timerWrapper }>
            <Text style={ styles.timer }>
              { formatTime(this.state.timer) }
            </Text>
          </View>
          <View style={ styles.buttonsWrapper }>
            { this.startStopButton() }
            { this.lapButton() }
          </View>
        </View>
        <ScrollView
          style={ styles.footer }
          contentContainerStyle={ styles.footerContainer }>
          <View>
            { this.getLaps() }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const COLOR_START_BORDER = '#27AE60'
const COLOR_STOP_BORDER = '#E74C3C'
const COLOR_LAP_BORDER = '#3498DB'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 25
  },
  header: {
    flex: 2
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
    color: '#000',
    fontSize: 20
  },
  button: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90
  },
  buttonStart: {
    backgroundColor: '#94E4B6',
    borderColor: COLOR_START_BORDER
  },
  buttonStop: {
    backgroundColor: '#ECA6A0',
    borderColor: COLOR_STOP_BORDER
  },
  buttonLap: {
    backgroundColor: '#A0CAE6',
    borderColor: COLOR_LAP_BORDER
  },
  footer: {
    flex: 3
  },
  footerContainer: {
    padding: 20
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
})
