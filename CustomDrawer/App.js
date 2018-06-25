import { Font } from 'expo';
import React from 'react';
import Router from './routes';
// Fonts
import robotoCondensedLight from './assets/fonts/RobotoCondensed-Light.ttf';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'roboto-condensed-light': robotoCondensedLight,
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (this.state.fontLoaded
      ? <Router />
      : null);
  }
}
