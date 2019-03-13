import React from 'react';

import {
    createAppContainer,
    createStackNavigator,
    NavigationActions
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ScreenOne from '../screens/ScreenOne';
import MainPage from '../screens/MainPage';
import ListDetails from '../screens/ListDetailScreen';
import Rename from '../screens/Rename';
import AddList from '../screens/AddList'
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
        Main: MainPage,
        ListDetails: ListDetails,
        Rename: Rename,
        AddList: AddList, 
        // Two: ScreenTwo,
        // Three: ScreenThree,
        // Four: ScreenFour,
        // Five: ScreenFive
    },
    {
        initialRouteName: 'Main'
    },
);

const TopLevelNavigator = createAppContainer(Root);