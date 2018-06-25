import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { DrawerActions } from 'react-navigation';

const styles = {
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 20,
  },
};
export default class Header extends Component {
  onPressBack = () => {
    Keyboard.dismiss();
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }
  render() {
    return (
      <View style={styles.headerStyle}>
        <Image
          source={require('./img/menu.png')}
        />
        <TouchableOpacity
          onPress={this.onPressBack}
        >
          <Image
            source={require('./img/back.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
