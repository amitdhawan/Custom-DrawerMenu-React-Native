
import React from 'react';

import Screen1 from './../screen1';

const mainComponent = props =>
  (
    <Screen1 {...props} />
  );
export default class Main extends React.Component {
  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return mainComponent(this.props);
  }
}

