/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler 
 * @author CMano
 */

import { INCREMENT, DECREMENT } from './constants';

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