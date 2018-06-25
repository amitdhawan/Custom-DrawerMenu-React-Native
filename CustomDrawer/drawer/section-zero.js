
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
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

export default class SectionZero extends Component {
    onPressScreen1 = () => {
      this.props.navigation.dispatch(DrawerActions.closeDrawer());
      this.props.navigation.navigate('Screen1');
    };
    onPressScreen2 = () => {
      this.props.navigation.dispatch(DrawerActions.closeDrawer());
      this.props.navigation.navigate('Screen2');
    }


    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.onPressScreen1}
          >
            <Text
              style={styles.textStyle}
            > Screen 1 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onPressScreen2}
          >
            <Text
              style={[styles.textStyle, { marginTop: 20 }]}
            > Screen 2
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
