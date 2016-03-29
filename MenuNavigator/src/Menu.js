import React, {
  Component,
  PropTypes,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'

export default class Menu extends Component {
  items () {
    const { items, current, onChapterChange } = this.props
    return items.map((item, i) =>
      <TouchableOpacity onPress={ onChapterChange.bind(null, i) } key={ i }>
        <Text style={ (i === current) ? [styles.item, styles.itemActive] : styles.item }>{ item.text }</Text>
      </TouchableOpacity>
    )
  }

  render () {
    const { title, width, height, offset } = this.props
    return (
      <ScrollView
      contentOffset={ { x: offset } }
      scrollEnabled={ false }
      contentContainerStyle={ [styles.menu, {width: width, height: height}] }>
        <Text style={ [styles.item, styles.itemTitle] }>{ title }</Text>
        { this.items() }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3694BF'
  },
  item: {
    fontSize: 28,
    fontWeight: '500',
    marginVertical: 30,
    color: '#BDC3C7'
  },
  itemActive: {
    color: '#ECF0F1'
  },
  itemTitle: {
    fontSize: 32,
    color: '#ECF0F1'
  }
})

Menu.propTypes = {
  onChapterChange: PropTypes.func,
  items: PropTypes.array,
  title: PropTypes.string,
  current: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  offset: PropTypes.number
}
