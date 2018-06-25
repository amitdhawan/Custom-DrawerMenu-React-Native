
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

const styles = {
  container: {
    paddingTop: 40,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
  },
  textStyle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    fontFamily: 'roboto-condensed-light',
    fontWeight: '300', // light
    fontSize: 20,
    color: '#8A8A8A',
  },
  separator: {
    marginTop: 10,
  },
};

const guestComponent = () =>
  (
    <View style={styles.container}>
      <Text
        style={styles.textStyle}
      > Hi Guest!
      </Text>
      <Image
        style={styles.separator}
        source={require('./img/line.png')}
      />
    </View>
  );

export default class Header extends Component {
  render() {
    return guestComponent();
  }
}
