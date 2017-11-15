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
const avatarBackgroundSource = { uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png' }
const avatarSource = { uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png' }

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            style={styles.avatarBackground}
            source={avatarBackgroundSource}
          >
            <Image
              square
              style={styles.avatar}
              source={avatarSource}
            />
          </Image>
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