import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
import {
  Container,
  Content,
  Card,
  CardItem,
  Icon,
  Left,
  Right,
  Button,
} from 'native-base'

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name='paper-plane' />
              <Text>Show User Profiles Here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text>Back to Home</Text>
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
})