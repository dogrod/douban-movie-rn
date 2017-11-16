import React from 'react'
import {
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native'
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Content,
  Card,
  CardItem,
  Icon,
} from 'native-base'

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text style={styles.buttonText}>Chat with people</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <Text style={styles.buttonText}>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff'
  }
})