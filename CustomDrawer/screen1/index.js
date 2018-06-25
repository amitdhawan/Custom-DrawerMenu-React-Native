import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavigationBar from './../navigationBar'

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});

export default class Screen1 extends React.Component {
  render() {
    return (
      <View>
        <NavigationBar
          {...this.props}
          backGroundColor="#32D5EC"
          hideRightIcon
          leftIcon="menu"
          leftIconColor="white"
          centerIcon={
            <Text
            style={styles.textStyle}
            >
            Screen 1
            </Text>
          }
        />
      </View>
    );
  }
}
