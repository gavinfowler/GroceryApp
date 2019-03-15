/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler
 * @author CMano
 */

import {
	INCREMENT,
	DECREMENT,
	DELETELIST,
	RENAMELIST,
	GETLIST,
	ADDLIST,
	TOGGLEITEM,
	DELETEITEM,
	RENAMEITEM
} from '../actions/constants';

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
	list: exampleList,
	activeList: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return { count: state.count + action.val };
		case DECREMENT:
			return { count: state.count - 1 };
		case DELETELIST:
			state.list.splice(action.index, 1);
			return { ...state, list: state.list }
		case RENAMELIST:
			state.list[action.index].name = action.newName;
			return { ...state, list: state.list };
		case GETLIST:
			return { ...state, activeList: action.index };
		case ADDLIST:
			dateTime = new Date();
			newList = { name: action.name, icon: action.icon, date: dateTime.toLocaleString(), itemList: [] };
			state.list.push(newList);
			console.log(state.list.length);
			return { list: state.list };
		case TOGGLEITEM:
			state.list[state.activeList].itemList[action.index].active = !state.list[state.activeList].itemList[action.index].active;
			return { ...state, list: state.list }
		case DELETEITEM:
			(state.list[state.activeList].itemList).splice(action.index, 1);
			return { ...state, list: state.list }
		case RENAMEITEM:
			state.list[state.activeList].itemList[action.index].itemName = action.newName;
			return { ...state, list: state.list };
		default:
			return state;
	}
}