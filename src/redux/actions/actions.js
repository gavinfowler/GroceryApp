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
    RENAMEITEM,
    DELETEITEM
} from './constants';

export function increment(val) {
    return {
        type: INCREMENT,
        val: val
    };
}


export function decrement() {
    return {
        type: DECREMENT
    };
}

export function deleteList(index) {
    return {
        type: DELETELIST,
        index: index
    }
}

export function renameList(index, newName) {
    return {
        type: RENAMELIST,
        index: index,
        newName: newName
    }
}

export function getList(index) {
    return {
        type: GETLIST,
        index: index,
    }
}

export function addList(name, icon) {
    return {
        type: ADDLIST,
        name: name,
        icon: icon,
    }
}

export function toggleItem(index) {
    return {
        type: TOGGLEITEM,
        index: index
    }
}

export function deleteItem(index) {
    return {
        type: DELETEITEM,
        index: index
    }
}

export function renameItem(index, newName) {
    return {
        type: RENAMEITEM,
        index: index,
        newName: newName
    }
}