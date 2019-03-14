/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler
 * @author CMano
 */

import { INCREMENT, DECREMENT, DELETELIST, RENAMELIST, GETLIST } from '../actions/constants';

const example = [
    { name: "Example List 1", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: [] },
    { name: "Example List 2", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: [] },
    { name: "Example List 3", icon: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", date: "3/12/2019, 8:13:24 PM", itemList: [] },
]

//sublist is array of objects [{name:something, active:true}]

let initialState = {
    count: 0,
    list: example,
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
            return { list: state.list }
        case RENAMELIST:
            // console.log(action.newName);
            state.list[action.index].name = action.newName;
        case GETLIST:
            console.log(action.index);
            console.log('ere');
            return { activeList: state.list[action.index] }
        default:
            return state;
    }
}