import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

import { Header } from 'react-native-elements';

const navigationBarComponent = (backGroundColor, leftComponent, centerIcon, rightComponent) => (
  <Header
    innerContainerStyles={{}}
    outerContainerStyles={{
      backgroundColor:
        backGroundColor,
      height: StatusBar.currentHeight + 70,
    }}
    leftComponent={leftComponent}
    centerComponent={centerIcon}
    rightComponent={rightComponent}
  />
);
export default class NavigationBar extends React.Component {
  static propTypes = {
    backGroundColor: PropTypes.string.isRequired,
    leftIcon: PropTypes.string,
    centerIcon: PropTypes.element.isRequired,
    rightIcon: PropTypes.string,
    hideLeftIcon: PropTypes.bool,
    hideRightIcon: PropTypes.bool,
    rightIconColor: PropTypes.string,
    leftIconColor: PropTypes.string,
  }
   onPressLeftButton = () => {
     this.props.navigation.openDrawer();
   }

   render() {
     const {
       backGroundColor, leftIcon, centerIcon, rightIcon, hideLeftIcon,
       hideRightIcon, rightIconColor, leftIconColor,
     } = this.props;
     let rightComponent = null;
     let leftComponent = null;

     if (!hideRightIcon) {
       rightComponent =
        (
          <TouchableOpacity
            onPress={this.onPressRightButton}
          >
            <Ionicons name={rightIcon} size={30} color={rightIconColor} />
          </TouchableOpacity>
        );
     }
     if (!hideLeftIcon) {
       leftComponent = (
         <TouchableOpacity
           onPress={this.onPressLeftButton}
         >
           <MaterialIcons
             name={leftIcon}
             size={30}
             color={leftIconColor}
           />
         </TouchableOpacity>
       );
     }

     return navigationBarComponent(backGroundColor, leftComponent, centerIcon, rightComponent);
   }
}
