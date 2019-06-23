import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import redux_thunk from 'redux-thunk';
import './assets/styles/index.scss'

import App from './App';
import reducers from './Reducers/'

// Enable Redux Dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer( applyMiddleware(redux_thunk) ) );

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));