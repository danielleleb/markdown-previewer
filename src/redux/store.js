import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';

import initialState from './placeholder';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers, [initialState]);

export default store;
