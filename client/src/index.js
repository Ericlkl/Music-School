import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducers from './Reducers/'

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));