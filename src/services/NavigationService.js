/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler
 * @author CMano
 */

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
import AddList from '../screens/AddList';
import AddListItem from '../screens/AddListItem';
import RenameListItem from '../screens/RenameListItem';

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

	goBack() {
		this._navigator.dispatch(NavigationActions.back());
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
		AddListItem: AddListItem,
		RenameListItem: RenameListItem,
	},
	{
		initialRouteName: 'Main'
	},
);

const TopLevelNavigator = createAppContainer(Root);