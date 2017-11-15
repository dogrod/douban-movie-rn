import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  Container,
  Button,
  Content,
} from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Text>Douban Movie React Native</Text>
          <Button
            full
            rounded
            style={styles.button}
          >
            <Text>Click me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});
// import React, { Component } from 'react'
// import Home from './home'
