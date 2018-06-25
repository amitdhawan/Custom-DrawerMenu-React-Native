import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Header from './header';
import Guest from './guest';
import SectionOne from './section-one';
import SectionZero from './section-zero';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
};


const sideMenuComponent = props =>
  (
    <View style={styles.container}>
      <ScrollView>
        <Header {...props} />
        <Guest />
        <SectionZero {...props} />
        <SectionOne {...props} />
      </ScrollView>
    </View>
  );
class SideMenu extends Component {
  render() {
    return sideMenuComponent(this.props);
  }
}


export default SideMenu;
