import React, { Component } from 'react';
import navigationService from '../services/NavigationService';

export default class NavigationServiceComponent extends Component {
  render() {
    return navigationService.getTopNavigator();
  }
}