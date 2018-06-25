
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { DrawerActions } from 'react-navigation';

const styles = {
  container: {
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
  },
  textStyle: {
    textAlign: 'left',
    fontFamily: 'roboto-condensed-light',
    fontWeight: '300', // light
    fontSize: 16,
    color: '#8A8A8A',
  },
  separator: {
    marginTop: 20,
  },
};

export default class SectionOne extends Component {
  onPressScreen3 = () => {
    Keyboard.dismiss();
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    this.props.navigation.navigate('Screen3');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onPressScreen3}
        >
          <Text
            style={styles.textStyle}
          > Screen 3
          </Text>
        </TouchableOpacity>
        <Image
          style={styles.separator}
          source={require('./img/line.png')}
        />
      </View>
    );
  }
}
