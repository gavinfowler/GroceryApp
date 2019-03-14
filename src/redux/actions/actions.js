/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler 
 * @author CMano
 */

import { INCREMENT, DECREMENT, DELETELIST } from './constants';

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

export function deleteList(index){
    return{
        type: DELETELIST,
        index: index
    }
}