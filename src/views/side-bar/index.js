import React from 'react'
import {
  AppRegistry,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native'
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
} from 'native-base'

const routes = ['Home', 'Chat', 'Profile']
const avatarBackgroundSrc = require('../../assets/images/banner_background.jpg')
const avatarSrc = require('../../assets/images/avatar.jpg')

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            style={styles.avatarBackground}
            source={avatarBackgroundSrc}
          />
          <List
            dataArray={routes}
            renderRow={
              data => {
                return (
                  <ListItem
                    button
                    onPress={() => this.props.navigation.navigate(data)}
                  >
                    <Text>{data}</Text>
                  </ListItem>
                )
              }
            }
          ></List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  avatarBackground: {
    height: 120,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 80,
    width: 70,
  },
})