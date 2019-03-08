import React from 'react';

import {
    createAppContainer,
    createStackNavigator,
    NavigationActions
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ScreenOne from '../screens/ScreenOne';
// import ScreenTwo from '../screens/ScreenTwo';
// import ScreenThree from '../screens/ScreenThree';
// import ScreenFour from '../screens/ScreenFour';
// import ScreenFive from '../screens/ScreenFive';

// Main navigation class to handle all routing 
let NavigationService = class NavigationService {
    constructor() {
    }

    getTopNavigator() {
        return (
            <TopLevelNavigator
                ref={navigatorRef => {
                    this._navigator = navigatorRef;
                }}
            />
        );
    }

    // Navigate to any screen
    navigate(routeName, params) {
        this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }
}

const navigationService = new NavigationService();
export default navigationService;

const Root = createStackNavigator(
    {
        Home: HomeScreen,
        One: ScreenOne,
        // Two: ScreenTwo,
        // Three: ScreenThree,
        // Four: ScreenFour,
        // Five: ScreenFive
    },
    {
        initialRouteName: 'Home'
    }
);

const TopLevelNavigator = createAppContainer(Root);