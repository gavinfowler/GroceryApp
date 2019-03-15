/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler
 */

import {
	DELETELIST,
	RENAMELIST,
	GETLIST,
	ADDLIST,
	TOGGLEITEM,
	DELETEITEM,
	RENAMEITEM,
	ADDITEM,
	LOAD
} from '../actions/constants';
import { load } from '../../LocalStorage/storage';

const exampleSubList = [
	{ itemName: 'Fruit', active: true },
	{ itemName: 'Veggie', active: false },
	{ itemName: 'Bread', active: true },
	{ itemName: 'Milk', active: false },
	{ itemName: 'Eggs', active: true },
	{ itemName: 'Flour', active: true },
];

const exampleList = [
	{ name: "Example List 1", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: exampleSubList },
	{ name: "Example List 2", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: exampleSubList },
	{ name: "Example List 3", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: exampleSubList },
];

//sublist is array of objects [{name:something, active:true}]

let initialState = {
	count: 0,
	list: [],
	activeList: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOAD:
			tempState = load();
			console.log(tempState);
			return { tempState }
		case DELETELIST:
			state.list.splice(action.index, 1);
			save(state);
			return { ...state, list: state.list };
		case RENAMELIST:
			state.list[action.index].name = action.newName;
			save(state);
			return { ...state, list: state.list };
		case GETLIST:
			newState = { ...state, activeList: action.index }
			save(newState);
			return { ...state, activeList: action.index };
		case ADDLIST:
			dateTime = new Date();
			newList = { name: action.name, icon: action.icon, date: dateTime.toLocaleString(), itemList: [] };
			state.list.push(newList);
			save(state);
			return { list: state.list };
		case TOGGLEITEM:
			state.list[state.activeList].itemList[action.index].active = !state.list[state.activeList].itemList[action.index].active;
			save(state);
			return { ...state, list: state.list };
		case DELETEITEM:
			(state.list[state.activeList].itemList).splice(action.index, 1);
			save(state);
			return { ...state, list: state.list };
		case RENAMEITEM:
			state.list[state.activeList].itemList[action.index].itemName = action.newName;
			save(state);
			return { ...state, list: state.list };
		case ADDITEM:
			newItem = { itemName: action.name, active: true };
			state.list[state.activeList].itemList.push(newItem);
			save(state);
			return { ...state, list: state.list };
		default:
			return state;
	}
}