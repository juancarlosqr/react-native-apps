import React, {
  Component,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'
import content from './content.json'

const { height, width } = Dimensions.get('window')

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      currentChapter: parseInt(content.initialChapter, 10)
    }
  }

  offset () {
    return width / 3
  }

  getMenuComponent () {
    const { currentChapter } = this.state
    return (
      <Menu
        onChapterChange={ (currentChapter) => this.setState({ currentChapter }) }
        title={ content.title }
        items={ content.chapters }
        current={ currentChapter }
        height={ height }
        width={ width }
        offset={ this.offset() } />
    )
  }

  render () {
    const { currentChapter, isOpen } = this.state
    return (
      <SideMenu
        menu={ this.getMenuComponent() }
        isOpen={ isOpen }
        bounceBackOnOverdraw={ false }
        openMenuOffset={ this.offset() }
        edgeHitWidth={ width / 11 }
        onChange={ (isOpen) => this.setState({ isOpen }) }>
        <Image source={ require('./bg.png') } style={ styles.backgroundImage }>
          <View style={ styles.container }>
            <View style={ styles.welcomeWrapper }>
              <Text style={ styles.welcome }>{ content.company }</Text>
            </View>
            <View style={ styles.instructionsWrapper }>
              <Text style={ [styles.instructions, styles.instructionsTitle] }>
                { content.chapters[currentChapter].text }
              </Text>
              <Text style={ styles.instructions }>
                { content.chapters[currentChapter].description }
              </Text>
            </View>
          </View>
        </Image>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  container: {
    flex: 1
  },
  welcomeWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    color: '#2c3e50',
    fontSize: 80,
    textAlign: 'center',
    margin: 30
  },
  instructionsWrapper: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#34495e',
    margin: 15,
    fontSize: 40
  },
  instructionsTitle: {
    fontSize: 45,
    marginBottom: 25
  }
})

/*
  Background image from uxgage (http://uxgage.com/)
  source: http://uxgage.com/img/background.png
*/
