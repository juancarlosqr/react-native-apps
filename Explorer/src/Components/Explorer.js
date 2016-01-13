'use strict';

import React, {
  Component,
  StyleSheet,
  Navigator
} from 'react-native'
import Welcome from './Welcome'
import About from './About'

const ROUTES = {
  welcome: Welcome,
  about: About
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})

export default class Explorer extends Component {
  renderScene (route, navigator) {
    const Component = ROUTES[route.name]
    return <Component navigator={navigator} />
  }

  render () {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'welcome'}}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromLeft}
        renderScene={this.renderScene} />
    )
  }
}
