import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import React from 'react';


import Screen1 from './../screen1';
import Screen2 from './../screen2';
import Screen3 from './../screen3';

import Drawer from './../drawer';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default createDrawerNavigator({
  Screen1: {
    screen: Screen1,
  },
  Screen2: {
    screen: Screen2,
  },
  Screen3: {
    screen: Screen3,
  },

}, {
  drawerWidth: DEVICE_WIDTH - 100,
  contentComponent: props => (
    <Drawer {...props} />
  ),
});
