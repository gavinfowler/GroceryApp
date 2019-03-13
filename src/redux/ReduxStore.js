/**
 * Grocery List App
 * CS3200 Mobile Development
 * 
 * @author GFowler 
 * @author CMano
 */

import { createStore } from 'redux';

import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);

export default store;