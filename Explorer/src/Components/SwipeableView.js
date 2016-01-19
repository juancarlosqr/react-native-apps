'use strict'

import React, {
  Component,
  View,
  PanResponder,
  PropTypes
} from 'react-native'

export default class SwipeableView extends Component {
  render () {
    var panHandlers = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 100) {
          this.props.toDownSwipe()
        }
        if (gestureState.dy < -100) {
          this.props.toUpSwipe()
        }
        if (gestureState.dx > 100) {
          this.props.toRightSwipe()
        }
        if (gestureState.dx < -100) {
          this.props.toLeftSwipe()
        }
      }
    }).panHandlers
    return (
      <View style={{flex: 1}} {...panHandlers} />
    )
  }
}

SwipeableView.propTypes = {
  toLeftSwipe: PropTypes.func,
  toRightSwipe: PropTypes.func,
  toDownSwipe: PropTypes.func,
  toUpSwipe: PropTypes.func
}
